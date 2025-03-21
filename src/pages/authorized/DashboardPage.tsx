import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent, SidebarComponent } from "../../components";
import { useStore } from "../../store/useStore";

export const DashboardPage = () => {
    const { isAsideOpen } = useStore();

    return (
        <div className="flex h-screen">
            <NavbarComponent />
            <SidebarComponent />
            <div
                className={`flex-1 flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${isAsideOpen ? 'ml-64' : 'ml-16'
                    } mt-16`}
            >
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-bg">
                    <div className="mx-auto">
                        <Outlet />
                    </div>
                </main>
                <FooterComponent />
            </div>
        </div>
    );
};