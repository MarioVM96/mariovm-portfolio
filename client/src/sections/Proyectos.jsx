import { projectsData } from '../data/proyectsData'
import { Icon } from '@iconify/react'

export default function Proyectos() {

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white px-4">
      <div className="max-w-5xl mx-auto">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="flex justify-center mb-16">
          <span className="bg-slate-900 border border-slate-800 text-purple-400 font-semibold px-6 py-2 rounded-lg text-lg tracking-wide shadow-md shadow-black/40">
            Proyectos
          </span>
        </div>

        {/* CONTENEDOR GRID RESPONSIVO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden hover:border-slate-800 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >

              {/* AREA SUPERIOR: CONTENEDOR DEL ICONO CON GRADIENTE DINÁMICO */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-slate-900/60 bg-slate-950 flex items-center justify-center p-2">

                {/* Patrón de puntitos sutiles de fondo para rellenar los bordes con estilo */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>

                {/* Imagen optimizada con object-contain y bordes redondeados tipo mockup */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Destello sutil encima */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none z-20"></div>

              </div>

              {/* AREA INFERIOR: INFORMACIÓN Y TEXTOS */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* ETIQUETAS DE TECNOLOGÍAS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800/80 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Botón GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md shadow-blue-900/20"
                  >
                    <Icon icon="bi:github" className="w-4 h-4" />
                    GitHub
                  </a>

                  {/* Botón Demo */}
                  <a
                    href={project.demo}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Icon icon="akar-icons:link-out" className="w-4 h-4 text-slate-400" />
                    Demo
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}