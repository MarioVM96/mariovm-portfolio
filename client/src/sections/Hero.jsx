export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hola, soy <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mario</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full Stack Developer | Java | Node.js | React
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Construyo aplicaciones web escalables usando arquitectura por capas. 
          Especializado en backend con Node.js y Java, frontend con React.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#proyectos"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contacto"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-bold transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}