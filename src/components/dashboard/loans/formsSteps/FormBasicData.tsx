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
            .matches(/^\d{2}\.\d{3}\.\d{3}$/, "Formato inválido (XX.XXX.XXX)")
            .required("DNI requerido"),
        nombre: Yup.string().required("Requerido"),
        apellido: Yup.string().required("Requerido"),
        email: Yup.string().email("Email inválido").required("Requerido"),
        telefono: Yup.string().required("Requerido"),
        provincia: Yup.string().required("Requerido"),
        localidad: Yup.string().required("Requerido"),
    });

    const fillForm = (setFieldValue: any) => {
        const simulatedData = {
            dni: "27.233.321",
            nombre: "Héctor",
            apellido: "Dominguez",
            email: "hectordominguez@gmail.com.com",
            telefono: "11 345 66985",
            provincia: "Buenos Aires",
            localidad: "La Plata",
        };

        Object.keys(simulatedData).forEach((key) => {
            setFieldValue(key as keyof typeof simulatedData, simulatedData[key as keyof typeof simulatedData]);
        });
        setFormData(simulatedData);
        setShowForm(true);
        markStepAsCompleted(true);
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
            onSubmit={(values) => {
                setFormData(values);
                markStepAsCompleted(true);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form className="p-4">
                    <div className="mb-6 border border-gray rounded-lg w-[400px] p-5">
                        <div className="flex items-center space-x-2">
                            <span className="text-tertiary">DNI</span>
                            <Field
                                type="text"
                                name="dni"
                                placeholder="Ingrese su DNI (XX.XXX.XXX)"
                                className="w-[300px] p-2 border border-gray rounded-md"
                                value={values.dni}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setFieldValue("dni", e.target.value);
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    fillForm(setFieldValue);
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