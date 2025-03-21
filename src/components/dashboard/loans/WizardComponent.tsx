import React, { useEffect } from "react";
import { useWizardStore } from "../../../store/useStoreWizard";
import { Step } from "../../../interfaces/step";

interface WizardProps {
    steps: Step[];
    onComplete: () => void;
}

export const WizardComponent: React.FC<WizardProps> = ({ steps, onComplete }) => {
    const { currentStep, setCurrentStep, completedSteps, markStepAsCompleted, formData, setFormData, submitForm } = useWizardStore();

    useEffect(() => {
        if (completedSteps.length !== steps.length) {
            useWizardStore.setState({ completedSteps: new Array(steps.length).fill(false) });
        }
    }, [steps.length]);

    const handleTabClick = (index: number) => {
        if (index <= currentStep || completedSteps[index]) {
            setCurrentStep(index);
        }
    };

    const isCurrentStepCompleted = completedSteps[currentStep];

    const handleNext = async () => {
        if (submitForm) {
            try {
                await submitForm();
            } catch (error) {
                console.error("Error al ejecutar submitForm:", error);
            }
        } else {
            return;
        }

        if (isCurrentStepCompleted) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div className="mx-auto">
            <div className="flex mb-4">
                {steps.map((step, index) => (
                    <button
                        key={index}
                        className={`flex-1 p-4 text-center border-b-4 ${index === currentStep
                            ? "border-primary font-bold"
                            : completedSteps[index]
                                ? "border-secondary"
                                : "border-transparent opacity-50 cursor-not-allowed"
                            }`}
                        onClick={() => handleTabClick(index)}
                        disabled={index > currentStep && !completedSteps[index]}
                    >
                        <div className="flex items-center justify-center gap-2">
                            {step.icon}
                            <span className="text-dark">{step.title}</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-[10px]">
                <div className="mt-4">
                    {typeof steps[currentStep].content === 'function'
                        ? steps[currentStep].content({
                            markStepAsCompleted: (isCompleted: boolean) =>
                                markStepAsCompleted(currentStep, isCompleted),
                            formData,
                            setFormData,
                            handleNextCreditData: handleNext,
                        })
                        : React.cloneElement(steps[currentStep].content, {
                            markStepAsCompleted: (isCompleted: boolean) =>
                                markStepAsCompleted(currentStep, isCompleted),
                            formData,
                            setFormData,
                            handleNextCreditData: handleNext,
                        })}
                </div>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
                {currentStep > 0 && (
                    <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="bg-secondary text-white px-4 py-2 rounded-lg"
                    >
                        Anterior
                    </button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button
                        onClick={handleNext}
                        disabled={!isCurrentStepCompleted}
                        className={`bg-primary text-white px-4 py-2 rounded-lg ${!isCurrentStepCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Siguiente
                    </button>
                ) : (
                    <button
                        onClick={onComplete}
                        disabled={!isCurrentStepCompleted}
                        className={`bg-primary text-white px-4 py-2 rounded-lg ${!isCurrentStepCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Finalizar
                    </button>
                )}
            </div>
        </div>
    );
};