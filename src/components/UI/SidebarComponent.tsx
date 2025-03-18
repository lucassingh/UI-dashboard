import { useAuth } from "../../context/AuthContext";

export const SidebarComponent = () => {

    const { setIsAuthenticated } = useAuth();

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
            <nav>
                <a href="/dashboard/home" className="block py-2.5 px-4 hover:bg-gray-700">
                    Home
                </a>
                <a href="/dashboard/clients" className="block py-2.5 px-4 hover:bg-gray-700">
                    Clients
                </a>
                <a href="/dashboard/services" className="block py-2.5 px-4 hover:bg-gray-700">
                    Services
                </a>

                <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
                    Cerrar sesión
                </button>
            </nav>
        </div>
    )
}
