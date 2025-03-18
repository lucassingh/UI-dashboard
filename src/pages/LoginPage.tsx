import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { LogoComponent, SliderComponent, LoaderComponent } from '../components';
import { integrations } from '../mock/constants';

export const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const initialValues = {
        username: '',
        password: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('El usuario o email es requerido'),
        password: Yup.string().required('La contraseña es requerida'),
    });

    const handleSubmit = (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const validUsername = 'admin';
        const validPassword = '1234';

        if (values.username === validUsername && values.password === validPassword) {
            setIsLoading(true);
            setIsAuthenticated(true);

            setTimeout(() => {
                setIsLoading(false);

                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Redirigiendo al dashboard...',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: 'rounded-lg shadow-custom',
                    },
                }).then(() => {
                    navigate('/dashboard/home');
                });
            }, 3000);
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Credenciales incorrectas. Inténtalo de nuevo.',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    popup: 'rounded-lg shadow-custom',
                },
            }).then(() => {
                setSubmitting(false);
            });
        }
    };

    return (
        <div className="flex h-screen">
            {isLoading && <LoaderComponent />}

            <div className="flex-1 flex flex-col items-center justify-center bg-white w-full md:w-1/2 relative overflow-hidden p-4">
                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-enter-left">
                    <LogoComponent width={600} height={600} color='#f3f4f9' />
                </div>
                <div className='flex justify-center items-center mb-4'>
                    <LogoComponent width={30} height={30} color='#3a57e8' />
                    <h1 className="text-3xl font-medium ml-3 text-dark">Boxivas</h1>
                </div>
                <div className="w-full max-w-md p-8 border border-gray rounded-md shadow-custom bg-white z-30">
                    <h1 className="text-1xl font-bold mb-6 text-dark">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Usuario o E-mail"
                                        className="w-full p-2 border border-gray rounded-lg"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        className="w-full p-2 border border-gray rounded-lg"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <label className="flex items-center">
                                        <Field type="checkbox" name="rememberMe" className="mr-2" />
                                        <span className="text-sm">Recordarme</span>
                                    </label>
                                    <a href="#" className="text-sm text-primary">¿Olvidaste tu contraseña?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white p-2 rounded-lg"
                                    disabled={isSubmitting}
                                >
                                    {isLogin ? 'Iniciar sesión' : 'Registrarme'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="mt-6 text-start" style={{ fontSize: '14px' }}>
                        ¿No tienes una cuenta?{' '}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-primary cursor-pointer"
                        >
                            Haga clic aquí para registrarse.
                        </span>
                    </p>
                </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center bg-primary">
                <div className="h-[400px] lg:h-[auto] grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)2%,rgba(0,0,0,0.8)98%,rgba(0,0,0,0))] 
[--webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)10%,rgba(0,0,0,0.6)90%,rgba(0,0,0,0))]">
                    <SliderComponent
                        integrations={integrations}
                    />
                    <SliderComponent
                        reverse
                        integrations={integrations.slice().reverse()}
                    />
                </div>
            </div>
        </div>
    );
};