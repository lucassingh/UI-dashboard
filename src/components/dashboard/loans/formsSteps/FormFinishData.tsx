import { useEffect } from "react";

interface FormFinishDataProps {
    markStepAsCompleted: (step: number, isCompleted: boolean) => void;
}

export const FormFinishData = ({ markStepAsCompleted }: FormFinishDataProps) => {
    useEffect(() => {
        markStepAsCompleted(4, true);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-[400px] relative overflow-hidden">
            <div className="bg-white backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/10 relative z-30 w-[500px]">
                <h2 className="text-2xl font-bold text-dark mb-4">Solicitud procesada con éxito</h2>

                <div className="border border-primary rounded-lg p-6">
                    <span className="text-primary">
                        Informar al cliente que la entidad financiera se pondrá en contacto para continuar con el proceso de validación de persona para finalizar con la solicitud.
                        En caso de tener algún inconveniente comunicarse al (54) 11 2322 2132 o soporte@boxivas.com
                    </span>
                </div>
            </div>
        </div>
    );
};