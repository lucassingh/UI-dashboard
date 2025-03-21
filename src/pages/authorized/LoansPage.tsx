import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormAditionalData, FormBasicData, FormCreditData, FormFinishData, FormLoanData, JumbotronComponent, LayoutComponent, WizardComponent } from "../../components";
import imgBg from '../../assets/UIDashboard/backgrounds/top-header.png';
import { IoListOutline, IoPersonAddOutline, IoPersonOutline, IoShieldCheckmarkOutline, IoWalletOutline } from "react-icons/io5";
import { Step } from "../../interfaces/step";
import { useWizardStore } from "../../store/useStoreWizard";

export const LoansPage = () => {
    const [isWizardComplete, setIsWizardComplete] = useState(false);
    const navigate = useNavigate();

    const steps = [
        {
            title: "Datos Básicos",
            icon: <IoPersonOutline className="text-4xl text-primary" />,
            content: (props: { markStepAsCompleted: (isCompleted: boolean) => void; formData: Record<string, any>; setFormData: (data: Record<string, any>) => void }) => <FormBasicData {...props} />,
        },
        {
            title: "Datos Adicionales",
            icon: <IoPersonAddOutline className="text-4xl text-primary" />,
            content: (props: any) => <FormAditionalData {...props} />,
        },
        {
            title: "Datos del Préstamo",
            icon: <IoWalletOutline className="text-4xl text-primary" />,
            content: (props: { markStepAsCompleted: (isCompleted: boolean) => void; formData: Record<string, any>; setFormData: (data: Record<string, any>) => void }) => {
                return <FormLoanData markStepAsCompleted={props.markStepAsCompleted} />;
            },
        },
        {
            title: "Ofertas del Crédito",
            icon: <IoListOutline className="text-4xl text-primary" />,
            content: (props: { handleNextCreditData: () => void; markStepAsCompleted: (step: number, isCompleted: boolean) => void }) => (
                <FormCreditData
                    handleNextCreditData={props.handleNextCreditData}
                    markCurrentStepAsCompleted={(isCompleted) => props.markStepAsCompleted(3, isCompleted)}
                />
            ),
        },
        {
            title: "Finalizar",
            icon: <IoShieldCheckmarkOutline className="text-4xl text-primary" />,
            content: (props: { markStepAsCompleted: (step: number, isCompleted: boolean) => void }) => (
                <FormFinishData markStepAsCompleted={props.markStepAsCompleted} />
            ),
        }
    ] as Step[];

    const handleComplete = () => {
        console.log("Wizard completado, reiniciando estado...");
        setIsWizardComplete(true);
        useWizardStore.getState().logout(); // Reinicia el estado de Zustand
    };

    useEffect(() => {
        if (isWizardComplete) {
            console.log("Borrando localStorage y redirigiendo...");
            localStorage.removeItem("wizard-storage");
            const timer = setTimeout(() => {
                console.log("Redirigiendo a /dashboard/home...");
                navigate("/dashboard/home");
                window.location.reload();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isWizardComplete, navigate]);

    return (
        <div className="relative h-auto">
            <JumbotronComponent
                imageUrl={imgBg}
                title="Solicitud de Préstamo"
            />

            <LayoutComponent>
                {!isWizardComplete ? (
                    <WizardComponent steps={steps} onComplete={handleComplete} />
                ) : (
                    <div className="text-center mt-8">
                        <h1 className="text-2xl font-bold">¡Proceso completado!</h1>
                    </div>
                )}
            </LayoutComponent>
        </div>
    );
};