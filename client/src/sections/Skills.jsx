export default function Skills() {
  const skills = {
    'Backend': ['Node.js', 'Express', 'Java', 'Spring Boot', 'SQL'],
    'Frontend': ['React', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    'Base de Datos': ['PostgreSQL', 'MySQL', 'SQL Server'],
    'Herramientas': ['Git', 'GitHub', 'Postman', 'AWS', 'Docker'],
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-950 rounded-lg border border-gray-700 p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 hover:border-blue-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}