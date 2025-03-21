import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DinamicTableComponent, JumbotronComponent, LayoutComponent, ModalComponent, PinCodeComponent } from "../../components";
import imgBg from '../../assets/UIDashboard/backgrounds/top-header.png';
import { columnsReq, rowsReq } from "../../mock/constants";
import { useStore } from "../../store/useStore";

const validationSchema = Yup.object({
    dni: Yup.string()
        .matches(/^\d{2}\.\d{3}\.\d{3}$/, "Formato inválido (XX.XXX.XXX)")
        .required("DNI requerido"),
});

export const PendingRequestPage = () => {
    const [showTable, setShowTable] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPinCorrect, setIsPinCorrect] = useState(false);
    const navigate = useNavigate();
    const { setActiveItem } = useStore();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePinComplete = (code: string) => {
        if (code === "123456") {
            setIsPinCorrect(true);
            handleCloseModal();
        } else {
            alert("PIN incorrecto. Inténtalo de nuevo.");
        }
    };

    const handleConfirmDelivery = () => {
        setActiveItem("home");
        navigate("/dashboard/home");
    };

    return (
        <div>
            <JumbotronComponent imageUrl={imgBg} title="Estado de tus préstamos" />
            <LayoutComponent>
                <Formik
                    initialValues={{ dni: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        setShowTable(values.dni === "27.233.321");
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form className="mb-6 border border-gray rounded-lg w-[400px] p-5" onSubmit={handleSubmit}>
                            <div className="flex items-center space-x-2">
                                <span className="text-tertiary">DNI</span>
                                <Field
                                    type="text"
                                    name="dni"
                                    placeholder="Ingrese su DNI (XX.XXX.XXX)"
                                    className="w-[300px] p-2 border border-gray rounded-md"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                                >
                                    Buscar
                                </button>
                            </div>
                            <ErrorMessage name="dni" component="div" className="text-red-500 text-sm" />
                        </Form>
                    )}
                </Formik>

                {isPinCorrect ? (
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
                            <h2 className="text-2xl font-bold text-dark mb-4">Entregar monto $100.000</h2>
                            <div className="flex justify-center space-x-4">
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={handleConfirmDelivery}
                                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
                                    >
                                        Confirmar Entrega
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    showTable && (
                        <DinamicTableComponent columns={columnsReq} rows={rowsReq} onGenerateCredit={handleOpenModal} />
                    )
                )}
            </LayoutComponent>

            <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="w-full">
                    <div className="m-8 my-20 max-w-[400px] mx-auto">
                        <div className="mb-8">
                            <h1 className="mb-4 text-3xl font-bold text-dark">Ingresar código de aprobación</h1>
                        </div>

                        <PinCodeComponent onComplete={handlePinComplete} />

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                                Validar
                            </button>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
};