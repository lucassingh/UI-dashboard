import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import {
    DashboardPage,
    LoginPage,
    PendingRequestPage,
    ServicesPage,
    //InsurancePage,
    LoansPage,
    NotFoundPage,
    HomePage,
} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />,
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
                            path: 'pending-request',
                            element: <PendingRequestPage />,
                        },
                        {
                            path: 'services',
                            element: <ServicesPage />,
                            children: [
                                {
                                    //path: 'insurances',
                                    //element: <InsurancePage />,
                                },
                                {
                                    path: 'loans',
                                    element: <LoansPage />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;