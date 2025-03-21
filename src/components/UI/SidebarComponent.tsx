import { useState, useEffect } from "react";
import { IoGridOutline, IoLayersOutline, IoReaderOutline, IoChevronDownOutline } from "react-icons/io5";
import { useStore } from "../../store/useStore";
import { useNavigate, useLocation } from "react-router-dom";
import { useWizardStore } from "../../store/useStoreWizard";

export const SidebarComponent = () => {
    const { isAsideOpen, activeItem, setActiveItem } = useStore();
    const { logout } = useWizardStore();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: 'home', icon: <IoGridOutline size={33} />, label: 'Tablero de Control', path: '/dashboard/home' },
        {
            id: 'services',
            icon: <IoLayersOutline size={33} />,
            label: 'Servicios',
            subItems: [
                { label: 'Prestamos', path: '/dashboard/services/loans' },
                // { label: 'Seguros', path: '/dashboard/services/insurances' }
            ],
        },
        { id: 'dashboard', icon: <IoReaderOutline size={33} />, label: 'Solicitudes Pendientes', path: '/dashboard/pending-request' },
    ];

    // Sincronizar activeItem con la ruta actual
    useEffect(() => {
        const currentItem = menuItems.find((item) => item.path === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.id);
        }
    }, [location.pathname, setActiveItem]);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-white transition-all duration-500 ease-in-out z-20 ${isAsideOpen ? 'w-64' : 'w-16'
                }`}
        >
            <div className="flex flex-col items-center w-full h-full py-8 mt-12 border-none">
                {menuItems.map((item) => (
                    <div style={{ width: '90%' }} className="mb-2.5" key={item.id}>
                        <div
                            className={`flex items-center w-full text-tertiary hover:bg-secondary hover:text-white hover:rounded-[10px] transition-colors duration-300 ease-in-out ${activeItem === item.id || (item.id === 'services' && item.subItems?.some(subItem => subItem.path === location.pathname))
                                ? 'bg-primary !text-white rounded-[10px]'
                                : ''
                                } ${isAsideOpen ? 'p-4' : 'p-3'} cursor-pointer`}
                            onClick={() => {
                                if (item.id === 'services') {
                                    setIsServicesOpen(!isServicesOpen);
                                } else {
                                    setActiveItem(item.id);
                                    navigate(item.path ?? '/dashboard/home');
                                }
                            }}
                        >
                            <div className={`flex items-center ${isAsideOpen ? 'px-2' : 'justify-center'}`}>
                                {item.icon}
                                {isAsideOpen && (
                                    <span
                                        className="ml-1 whitespace-nowrap transition-opacity duration-300"
                                        style={{
                                            opacity: isAsideOpen ? 1 : 0,
                                            transitionDelay: isAsideOpen ? '300ms' : '0ms', // Retraso al desplegar
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                )}
                            </div>
                            {isAsideOpen && item.id === 'services' && (
                                <div className="ml-auto">
                                    <IoChevronDownOutline
                                        size={20}
                                        className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            )}
                        </div>
                        {isAsideOpen && item.id === 'services' && isServicesOpen && (
                            <div className="pl-0 bg-[#f5f6fa] rounded-bl-[8px] rounded-br-[8px] pb-4 pt-4">
                                {item.subItems?.map((subItem) => (
                                    <div
                                        key={subItem.label}
                                        className={`flex items-center p-3 pb-[10px] text-tertiary hover:bg-primary hover:text-white hover:rounded-[10px] transition-colors duration-300 ease-in-out cursor-pointer ${location.pathname === subItem.path ? 'bg-secondary !text-white rounded-[10px]' : ''
                                            }`}
                                        onClick={() => {
                                            setActiveItem(subItem.path);
                                            navigate(subItem.path);
                                        }}
                                    >
                                        <span
                                            className="whitespace-nowrap transition-opacity duration-300"
                                            style={{
                                                opacity: isAsideOpen ? 1 : 0,
                                                transitionDelay: isAsideOpen ? '300ms' : '0ms', // Retraso al desplegar
                                            }}
                                        >
                                            {subItem.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
                    style={{ width: '90%' }}
                >
                    <button
                        className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </aside>
    );
};