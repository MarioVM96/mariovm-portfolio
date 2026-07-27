import { projectsData } from '../data/proyectsData'

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Proyectos
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-black rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition group">
              
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-gray-400 text-6xl">{project.icon}</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition font-bold"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded transition font-bold"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}