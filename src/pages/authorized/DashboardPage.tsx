import { Outlet } from "react-router-dom"
import { FooterComponent, NavbarComponent, SidebarComponent } from "../../components"

export const DashboardPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <SidebarComponent />
            <div className="flex-1 flex flex-col overflow-hidden">
                <NavbarComponent />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>
                </main>
                <FooterComponent />
            </div>
        </div>
    )
}
