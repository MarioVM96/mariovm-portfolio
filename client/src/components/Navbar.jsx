import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MarioVM
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Inicio</a>
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Acerca de</a>
              <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Proyectos</a>
              <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-950 border-b border-slate-900`} id="mobile-menu">
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col gap-2">
          <a href="#" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">Inicio</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">Acerca de</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">Proyectos</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;