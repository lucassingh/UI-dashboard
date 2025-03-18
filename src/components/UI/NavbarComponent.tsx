
export const NavbarComponent = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <button className="text-gray-500 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
