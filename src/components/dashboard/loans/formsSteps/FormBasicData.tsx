import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormBasicDataProps } from "../../../../interfaces/forms";

export const FormBasicData: React.FC<FormBasicDataProps> = ({
    markStepAsCompleted,
    formData,
    setFormData,
}) => {
    const [showForm, setShowForm] = useState(!!formData.dni);

    const validationSchema = Yup.object({
        dni: Yup.string()
            .matches(
                /^\d{1,2}\.\d{3}\.\d{3}$/,
                "Formato inválido (X.XXX.XXX o XX.XXX.XXX)"
            )
            .required("DNI requerido"),
        nombre: Yup.string().required("Requerido"),
        apellido: Yup.string().required("Requerido"),
        email: Yup.string().email("Email inválido").required("Requerido"),
        telefono: Yup.string().required("Requerido"),
        provincia: Yup.string().required("Requerido"),
        localidad: Yup.string().required("Requerido"),
    });

    const formatDNI = (value: string) => {
        const numbersOnly = value.replace(/\D/g, "");
        const truncatedNumbers = numbersOnly.slice(0, 8);
        if (truncatedNumbers.length <= 2) {
            return truncatedNumbers;
        } else if (truncatedNumbers.length <= 5) {
            return `${truncatedNumbers.slice(0, -3)}.${truncatedNumbers.slice(-3)}`;
        } else {
            return `${truncatedNumbers.slice(0, -6)}.${truncatedNumbers.slice(-6, -3)}.${truncatedNumbers.slice(-3)}`;
        }
    };

    const fillForm = (setFieldValue: any, dni: string) => {
        if (dni === "27.233.321" || dni === "2.723.321") {
            const simulatedData = {
                dni: dni,
                nombre: "Héctor",
                apellido: "Dominguez",
                email: "hectordominguez@gmail.com",
                telefono: "11 345 66985",
                provincia: "Buenos Aires",
                localidad: "La Plata",
            };

            Object.keys(simulatedData).forEach((key) => {
                setFieldValue(key as keyof typeof simulatedData, simulatedData[key as keyof typeof simulatedData]);
            });
            setFormData(simulatedData); // Actualiza el estado global
            markStepAsCompleted(true);
        } else {
            const emptyData = {
                dni: dni,
                nombre: "",
                apellido: "",
                email: "",
                telefono: "",
                provincia: "",
                localidad: "",
            };

            Object.keys(emptyData).forEach((key) => {
                setFieldValue(key as keyof typeof emptyData, emptyData[key as keyof typeof emptyData]);
            });
            setFormData(emptyData); // Actualiza el estado global
            markStepAsCompleted(false);
        }
        setShowForm(true);
    };

    return (
        <Formik
            initialValues={{
                dni: formData.dni || "",
                nombre: formData.nombre || "",
                apellido: formData.apellido || "",
                email: formData.email || "",
                telefono: formData.telefono || "",
                provincia: formData.provincia || "",
                localidad: formData.localidad || "",
            }}
            validationSchema={validationSchema}
            validateOnMount={false}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                setFormData(values); // Actualiza el estado global al enviar el formulario
                markStepAsCompleted(true);
            }}
        >
            {({ values, setFieldValue, isValid, dirty, validateForm, setFieldTouched }) => (
                <Form className="p-4">
                    <div className="mb-6 border border-gray rounded-lg w-[400px] p-5">
                        <div className="flex items-center space-x-2">
                            <span className="text-tertiary">DNI</span>
                            <Field
                                type="text"
                                name="dni"
                                placeholder="Ingrese su DNI (X.XXX.XXX o XX.XXX.XXX)"
                                className="w-[300px] p-2 border border-gray rounded-md text-right"
                                value={values.dni}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const formattedValue = formatDNI(e.target.value);
                                    setFieldValue("dni", formattedValue);
                                    validateForm();

                                    // Actualiza el estado global con el nuevo valor del DNI
                                    setFormData({ ...formData, dni: formattedValue });
                                }}
                                onBlur={() => {
                                    setFieldTouched("dni", true);
                                    validateForm();
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    fillForm(setFieldValue, values.dni);
                                }}
                                className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Buscar
                            </button>
                        </div>
                        <ErrorMessage name="dni" component="div" className="text-red-500 text-sm" />
                    </div>
                    {showForm && (
                        <div className="grid grid-cols-2 gap-4 bg-gray-100 rounded-md">
                            {[
                                { name: "nombre", placeholder: "Nombre" },
                                { name: "apellido", placeholder: "Apellido" },
                                { name: "email", placeholder: "Email" },
                                { name: "telefono", placeholder: "Teléfono" },
                                { name: "provincia", placeholder: "Provincia" },
                                { name: "localidad", placeholder: "Localidad" },
                            ].map((field) => (
                                <div key={field.name} className="flex flex-col">
                                    <span className="text-tertiary">{field.placeholder}</span>
                                    <Field
                                        type="text"
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className="w-full p-2 border border-gray rounded-md"
                                        autoComplete="off"
                                        onBlur={() => {
                                            setFieldTouched(field.name, true);
                                            validateForm();
                                        }}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setFieldValue(field.name, e.target.value);
                                            validateForm().then((errors) => {
                                                if (Object.keys(errors).length === 0) {
                                                    markStepAsCompleted(true);
                                                } else {
                                                    markStepAsCompleted(false);
                                                }
                                            });
                                            setFormData({ ...formData, [field.name]: e.target.value });
                                        }}
                                    />
                                    <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm" />
                                </div>
                            ))}
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};