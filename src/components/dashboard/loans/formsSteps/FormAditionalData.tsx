import React from "react";
import { useWizardStore } from "../../../../store/useStoreWizard";

export const FormAditionalData: React.FC<{
    markStepAsCompleted: (isCompleted: boolean) => void;
}> = ({ markStepAsCompleted }) => {
    const { formData, setFormData, setCurrentStep, currentStep } = useWizardStore();

    const handleResponse = (hasBankAccount: boolean) => {
        // Actualiza el estado del formulario
        setFormData({ ...formData, hasBankAccount });

        // Marca el paso como completado
        markStepAsCompleted(true);

        // Avanza automáticamente al siguiente paso
        setCurrentStep(currentStep + 1);
    };

    return (
        <div className="flex items-center justify-center min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute z-10 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl top-1/2 left-1/4 transform -translate-x-1/3 -translate-y-1/2"
                    aria-hidden="true"
                />
                <div
                    className="absolute w-[400px] h-[200px] bg-secondary/30 rounded-full blur-3xl bottom-1/6 right-1/4 transform translate-x-1/3 translate-y-1/2"
                    aria-hidden="true"
                />
            </div>
            <div className=" bg-white backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/10 relative z-30">
                <h2 className="text-2xl font-bold text-dark mb-6">
                    ¿Tiene cuenta de banco?
                </h2>
                <div className="flex justify-center space-x-4">
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => handleResponse(true)}
                            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all flex-1"
                        >
                            Sí
                        </button>
                        <button
                            onClick={() => handleResponse(false)}
                            className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all flex-1"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};