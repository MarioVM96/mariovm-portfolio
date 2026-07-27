import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    MarioVM
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    <a href="#inicio" className="hover:text-blue-400 transition">Inicio</a>
                    <a href="#about" className="hover:text-blue-400 transition">Acerca de</a>
                    <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
                    <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                    <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="flex flex-col gap-4 p-4">
                        <a href="#inicio" className="hover:text-blue-400">Inicio</a>
                        <a href="#about" className="hover:text-blue-400">Acerca de</a>
                        <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
                        <a href="#skills" className="hover:text-blue-400">Skills</a>
                        <a href="#contacto" className="hover:text-blue-400">Contacto</a>
                    </div>
                )}
            </div>
        </nav>
    )
}