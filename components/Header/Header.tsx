import Navbar from "../Navbar/Navbar"

export default function Header() {
    return (
        <header className="border-b">
            <div className="max-w-6x1 mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2x1 font-bold">
                        Belisco
                    </h1>

                    <Navbar />    
                </div>   
            </div>
        </header>
    );
}