import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ClientsPage, DashboardPage, HomePage, LoginPage, ServicesPage } from '../pages';
import { useAuth } from '../context/AuthContext';

const Routes = () => {
    const { isAuthenticated } = useAuth();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '/dashboard',
            element: isAuthenticated ? <DashboardPage /> : <Navigate to="/" />,
            children: [
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
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;