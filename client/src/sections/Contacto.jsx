export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Trabajemos Juntos
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          ¿Tienes un proyecto en mente? Me encantaría escucharte.
        </p>

        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <a 
            href="mailto:mario@example.com"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition"
          >
            Enviar Email
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-bold transition"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-bold transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          O sígueme en redes sociales para más contenido de desarrollo.
        </p>
      </div>
    </section>
  )
}