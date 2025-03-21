export interface Step {
    title: string;
    icon: React.ReactNode;
    content: React.ReactElement<{
        markStepAsCompleted?: (isCompleted: boolean) => void;
        formData?: Record<string, any>;
        setFormData?: (data: Record<string, any>) => void;
        handleNextCreditData?: () => void;
    }> | ((props: {
        markStepAsCompleted?: (isCompleted: boolean) => void;
        formData?: Record<string, any>;
        setFormData?: (data: Record<string, any>) => void;
        handleNextCreditData?: () => void;
    }) => React.ReactElement);
}