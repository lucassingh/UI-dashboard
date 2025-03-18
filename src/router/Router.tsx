import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ClientsPage, DashboardPage, HomePage, LoginPage, ServicesPage } from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />
        },
        {
            path: '/dashboard',
            element: <ProtectedRoute />,
            children: [
                {
                    element: <DashboardPage />,
                    children: [
                        {
                            index: true,
                            element: <Navigate to="home" replace />,
                        },
                        {
                            path: 'home',
                            element: <HomePage />,
                        },
                        {
                            path: 'clients',
                            element: <ClientsPage />,
                        },
                        {
                            path: 'services',
                            element: <ServicesPage />,
                        },
                    ],
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;