import { useState } from "react";
import { DinamicTableComponent } from "../../../UI/DinamicTableComponent";
import { columns, rows } from "../../../../mock/constants";
import { useWizardStore } from "../../../../store/useStoreWizard";
import { ModalComponent } from "../../../UI/ModalComponent";

interface FormCreditDataProps {
    handleNextCreditData: () => void;
    markStepAsCompleted?: (step: number, isCompleted: boolean) => void;
    markCurrentStepAsCompleted?: (isCompleted: boolean) => void;
}

export const FormCreditData = ({ handleNextCreditData, markCurrentStepAsCompleted }: FormCreditDataProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<typeof rows[0] | null>(null);

    const { formData, setCurrentStep, currentStep } = useWizardStore();

    const handleOpenModal = (row: typeof rows[0]) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedRow(null);
    };

    const handleConfirm = () => {
        if (markCurrentStepAsCompleted) {
            markCurrentStepAsCompleted(true);
        }
        setCurrentStep(currentStep + 1);
        handleCloseModal();
        handleNextCreditData();
    };

    return (
        <>
            <DinamicTableComponent
                columns={columns}
                rows={rows}
                onGenerateCredit={handleOpenModal}
            />

            <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="w-full">
                    <div className="m-8 my-20 max-w-[400px] mx-auto">
                        <div className="mb-8">
                            <h1 className="mb-4 text-3xl font-bold text-dark">¿Desea continuar con el préstamo?</h1>
                            <p className="text-tertiary">
                                {selectedRow?.financialInstitution} por un monto de {selectedRow?.amount} asignado a{" "}
                                {formData.nombre} {formData.apellido} con DNI {formData.dni}.
                            </p>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
};