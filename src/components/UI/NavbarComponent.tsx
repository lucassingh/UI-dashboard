import { IoCaretForwardCircleOutline, IoSearchOutline } from "react-icons/io5"; // Importar el ícono de lupa
import { LogoComponent } from "./LogoComponent";
import { useStore } from "../../store/useStore";
import avatar from '../../assets/UIDashboard/avatars/avatar.png';

export const NavbarComponent = () => {
    const { isAsideOpen, toggleAside } = useStore();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow z-30">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center pl-4">
                    <LogoComponent width={35} height={35} color="#3a57e8" />
                    <h1 className="text-2xl font-semibold text-dark ml-8">Boxivas</h1>
                    <button onClick={toggleAside} className="text-gray-500 focus:outline-none ml-2">
                        <IoCaretForwardCircleOutline
                            className={`transition-transform duration-500 mt-1 ease-in-out ${isAsideOpen ? "transform rotate-180" : -"transform rotate-90"}`}
                            size={35}
                            color="#3a57e8"
                        />
                    </button>
                </div>
                <div className="flex items-center justify-center flex-grow mx-4">
                    <div className="relative w-[500px]">
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="w-full pl-10 pr-4 py-2 border border-[#f3f4f9] rounded-[8px] text-[#f3f4f9] focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                        <IoSearchOutline
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#f3f4f9]"
                            size={20}
                        />
                    </div>
                </div>

                <div className="flex items-center pr-4">
                    <div className="h-12 w-12 mr-4 bg-gray-300 rounded-full">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="text-left mr-3">
                        <p className="text-dark text-lg font-medium">Héctor Dominguez</p>
                        <p className="text-gray text-sm">Sucursal Boedo</p>
                    </div>
                </div>
            </div>
        </header>
    );
};