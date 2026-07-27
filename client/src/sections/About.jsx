export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Acerca de Mí
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Soy desarrollador fullstack con más de 3 años de experiencia en tecnologías como PHP, 
              JavaScript, Node.js y React. Actualmente, estoy expandiendo mis habilidades con Java y Spring Boot.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Me especializo en arquitectura por capas, APIs RESTful y desarrollo de aplicaciones escalables. 
              Creo en escribir código limpio, mantenible y bien documentado.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Cuando no estoy programando, me apasiona aprender nuevas tecnologías, resolver problemas complejos 
              y ayudar a otros desarrolladores a crecer en su carrera.
            </p>

            <div className="flex gap-4">
              <div>
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <p className="text-gray-400">Años de experiencia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <p className="text-gray-400">Proyectos completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">5</div>
                <p className="text-gray-400">Tecnologías principales</p>
              </div>
            </div>
          </div>

          {/* Card de experiencia */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Fullstack Developer</h3>
              <p className="text-gray-400">DEMSA (2023-2026)</p>
              <p className="text-sm text-gray-500 mt-2">Desarrollé módulos en PHP, JavaScript y SQL Server. Trabajé con Power BI para dashboards analíticos.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Bootcamp Java</h3>
              <p className="text-gray-400">Generation México (2026)</p>
              <p className="text-sm text-gray-500 mt-2">Cursé programa intensivo de 13 semanas. Aprendí Java, Spring Boot, MySQL y AWS.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-2">QA Tester</h3>
              <p className="text-gray-400">Actual</p>
              <p className="text-sm text-gray-500 mt-2">Testing de software y soporte técnico. Asegurando calidad en cada release.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}