import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WizardStore {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    completedSteps: boolean[];
    markStepAsCompleted: (step: number, isCompleted: boolean) => void;
    formData: {
        dni?: string;
        nombre?: string;
        apellido?: string;
        email?: string;
        telefono?: string;
        provincia?: string;
        localidad?: string;
        hasBankAccount?: boolean;
        loanAmount?: number;
        monthlyIncome?: number;
    };
    setFormData: (data: Partial<WizardStore['formData']>) => void;
    resetFormData: () => void;
    submitForm: () => Promise<void>;
    setSubmitForm: (submitForm: () => Promise<void>) => void;
    logout: () => void;
}

export const useWizardStore = create<WizardStore>()(
    persist(
        (set) => ({
            currentStep: 0,
            completedSteps: [],
            formData: {},
            submitForm: async () => { },
            setCurrentStep: (step) => set({ currentStep: step }),
            markStepAsCompleted: (step, isCompleted) => {
                set((state) => {
                    const updatedCompletedSteps = [...state.completedSteps];
                    updatedCompletedSteps[step] = isCompleted;
                    return { completedSteps: updatedCompletedSteps };
                });
            },
            setFormData: (data) =>
                set((state) => ({
                    formData: { ...state.formData, ...data },
                })),
            resetFormData: () => set({ formData: {} }),
            setSubmitForm: (submitForm) => {
                set({ submitForm });
            },
            logout: () => {
                localStorage.removeItem("wizard-storage");
                set({
                    currentStep: 0,
                    completedSteps: [],
                    formData: {},
                });
            },
        }),
        {
            name: 'wizard-storage',
        }
    )
);