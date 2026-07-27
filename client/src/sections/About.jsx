import { Icon } from '@iconify/react';

export default function About() {
  const historyData = [
    {
      role: "Fullstack Developer",
      place: "DEMSA (2023 - 2026)",
      desc: "Desarrollé módulos en PHP, JavaScript y SQL Server. Trabajé con Power BI para dashboards analíticos.",
      icon: "lucide:briefcase"
    },
    {
      role: "Bootcamp Java",
      place: "Generation México (2026)",
      desc: "Cursé programa intensivo de 13 semanas. Aprendí Java, Spring Boot, MySQL y AWS.",
      icon: "lucide:graduation-cap"
    },
    {
      role: "QA Tester",
      place: "Actual",
      desc: "Testing de software y soporte técnico. Asegurando la máxima calidad en cada release.",
      icon: "lucide:shield-check"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 text-white px-4 overflow-hidden">
      
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-center mb-16">
          <span className="bg-slate-900 border border-slate-800 text-purple-400 font-semibold px-6 py-2 rounded-lg text-lg tracking-wide shadow-md shadow-black/40">
            Acerca de Mí
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col h-full justify-between gap-8">
            <div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-md">
              <p>
                Soy desarrollador <span className="text-white font-medium">fullstack con más de 3 años de experiencia</span> en tecnologías como PHP, JavaScript, Node.js y React. Actualmente, estoy expandiendo mis habilidades con Java y Spring Boot.
              </p>
              <p>
                Me especializo en <span className="text-blue-400 font-medium">arquitectura por capas</span>, APIs RESTful y desarrollo de aplicaciones escalables. Creo firmemente en escribir código limpio, mantenible y bien documentado.
              </p>
              <p>
                Cuando no estoy programando, me apasiona aprender nuevas tecnologías, resolver problemas complejos y ayudar a otros desarrolladores a crecer en su carrera.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">3+</span>
                <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Años de Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">2</span>
                <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Proyectos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">19</span>
                <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Tecnologías</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-5 p-6 bg-slate-900/30 border border-slate-900 rounded-2xl transition-all duration-300 hover:bg-slate-900/60 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] cursor-default"
              >
                <div className="flex-shrink-0 p-3 bg-slate-900 border border-slate-800 rounded-xl text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors duration-300">
                  <Icon icon={item.icon} className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {item.place}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}