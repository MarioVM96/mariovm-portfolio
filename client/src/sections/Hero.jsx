export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] bg-slate-950 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* 1. EFECTO GLOW DE FONDO (Luces de neón sutiles) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-4000"></div>

      {/* Contenedor del contenido con z-index para estar por encima de las luces */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* TÍTULO PRINCIPAL CON DEGRADADO */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            Mario
          </span>
        </h1>

        {/* RECUADRO DE ROL PRINCIPAL */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm md:text-base font-medium mb-6 shadow-lg shadow-black/20">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
          Full Stack Developer <span className="text-slate-600">|</span> Java <span className="text-slate-600">|</span> Node.js <span className="text-slate-600">|</span> React
        </div>

        {/* DESCRIPCIÓN REFINADA (Mayor legibilidad) */}
        <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-10 balance">
          Construyo aplicaciones web escalables usando <span className="text-blue-400 font-medium">arquitectura por capas</span>. 
          Especializado en el desarrollo de backends robustos con <span className="text-indigo-300 font-medium">Node.js y Java</span>, 
          y en la creación de interfaces dinámicas con <span className="text-purple-400 font-medium">React</span>.
        </p>

        {/* BOTONES MEJORADOS CON ANIMACIONES */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Botón Principal (Ver Proyectos) con efecto hover de brillo */}
          <a 
            href="#projects" 
            className="relative inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-md rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] overflow-hidden group"
          >
            {/* Destello blanco que cruza el botón al pasar el mouse */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out] pointer-events-none"></span>
            Ver Proyectos
          </a>

          {/* Botón Secundario (Contacto) con borde interactivo */}
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-slate-800 hover:border-purple-500/60 text-slate-300 hover:text-white font-semibold text-md rounded-xl transition-all duration-300 hover:scale-105 hover:bg-purple-950/10 cursor-pointer"
          >
            Contacto
          </a>

        </div>

      </div>
    </section>
  );
}