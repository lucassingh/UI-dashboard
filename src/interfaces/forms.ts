export interface FormBasicDataProps {
    markStepAsCompleted: (isCompleted: boolean) => void;
    formData: Record<string, any>;
    setFormData: (data: Record<string, any>) => void;
}

export interface FormLoanDataRef {
    submitForm: () => Promise<void>;
}