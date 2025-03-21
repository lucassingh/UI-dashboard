import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useWizardStore } from "../../../../store/useStoreWizard";

export interface FormLoanDataRef {
    submitForm: () => void;
}

export const FormLoanData: React.FC<{
    markStepAsCompleted: (isCompleted: boolean) => void;
}> = ({ markStepAsCompleted }) => {
    const { formData, setFormData } = useWizardStore();

    const formikRef = useRef<any>(null);

    const validationSchema = Yup.object({
        loanAmount: Yup.string()
            .required("El monto es requerido")
            .test("is-valid-amount", "El monto debe ser un número válido", (value) => {
                if (!value) return false;
                const numericValue = value.replace(/\./g, "").replace(",", ".");
                return !isNaN(Number(numericValue)) && Number(numericValue) > 0;
            }),
        monthlyIncome: Yup.string()
            .required("Los ingresos son requeridos")
            .test("is-valid-amount", "Los ingresos deben ser un número válido", (value) => {
                if (!value) return false;
                const numericValue = value.replace(/\./g, "").replace(",", ".");
                return !isNaN(Number(numericValue)) && Number(numericValue) > 0;
            }),
    });

    const formatCurrency = (value: string) => {
        const numericValue = value.replace(/[^0-9,]/g, "");
        const parts = numericValue.split(",");
        let integerPart = parts[0];
        const decimalPart = parts.length > 1 ? `,${parts[1]}` : "";
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `${integerPart}${decimalPart}`;
    };

    const parseCurrency = (value: string) => {
        return parseFloat(value.replace(/\./g, "").replace(",", "."));
    };

    return (
        <div className="flex items-center justify-center min-h-[400px] relative overflow-hidden">
            <div className="bg-white backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/10 relative z-10">
                <Formik
                    innerRef={formikRef}
                    initialValues={{
                        loanAmount: formData.loanAmount ? formatCurrency(formData.loanAmount.toString()) : "",
                        monthlyIncome: formData.monthlyIncome ? formatCurrency(formData.monthlyIncome.toString()) : "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const loanAmount = parseCurrency(values.loanAmount);
                        const monthlyIncome = parseCurrency(values.monthlyIncome);
                        setFormData({
                            ...formData,
                            loanAmount,
                            monthlyIncome,
                        });
                        markStepAsCompleted(true);
                    }}
                >
                    {({ isValid, values, setFieldValue }) => (
                        <Form>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="loanAmount" className="block text-sm font-medium text-tertiary">
                                        Monto a solicitar
                                    </label>
                                    <div className="relative mt-1">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray">$</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="loanAmount"
                                            placeholder="Monto"
                                            className="w-full pl-7 pr-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            value={formatCurrency(values.loanAmount)}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const formattedValue = formatCurrency(e.target.value);
                                                setFieldValue("loanAmount", formattedValue);
                                                if (isValid && values.loanAmount && values.monthlyIncome) {
                                                    markStepAsCompleted(true);
                                                } else {
                                                    markStepAsCompleted(false);
                                                }
                                            }}
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="loanAmount"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="monthlyIncome" className="block text-sm font-medium text-tertiary">
                                        Ingresos mínimos mensuales
                                    </label>
                                    <div className="relative mt-1">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray">$</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="monthlyIncome"
                                            placeholder="Monto"
                                            className="w-full pl-7 pr-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            value={formatCurrency(values.monthlyIncome)}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const formattedValue = formatCurrency(e.target.value);
                                                setFieldValue("monthlyIncome", formattedValue);
                                                if (isValid && values.loanAmount && values.monthlyIncome) {
                                                    markStepAsCompleted(true);
                                                } else {
                                                    markStepAsCompleted(false);
                                                }
                                            }}
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="monthlyIncome"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};