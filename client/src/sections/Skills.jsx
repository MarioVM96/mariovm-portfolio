import React from 'react';
import { Icon } from '@iconify/react';

function Skills() {
  const skillsData = [
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "React", icon: "logos:react" },
    { name: "Express", icon: "logos:express" },
    { name: "Java", icon: "logos:java" },
    { name: "Spring Boot", icon: "logos:spring-icon" },
    { name: "PHP", icon: "logos:php" },
    { name: "Python", icon: "logos:python" },
    { name: "jQuery", icon: "logos:jquery" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "SQL Server", icon: "logos:microsoft-sql-server" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
    { name: "Power BI", icon: "logos:microsoft-powerbi" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" }
  ];

  // Truco profesional: Duplicamos los elementos para el bucle infinito
  const doubleSkills = [...skillsData, ...skillsData];

  return (
    <section id='skills' className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Título de la sección */}
        <div className="flex justify-center mb-16">
          <span className="bg-slate-900 border border-slate-800 text-purple-400 font-semibold px-6 py-2 rounded-lg text-lg tracking-wide shadow-md shadow-black/40">
            Skills
          </span>
        </div>

        {/* Contenedor con máscaras de desvanecido transparente en los bordes izquierdo/derecho */}
        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">

          {/* El contenedor que corre continuamente en horizontal */}
          <div className="flex w-max gap-6 animate-marquee whitespace-nowrap">
            {doubleSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[130px] p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group cursor-pointer"
              >
                {/* Icono */}
                <div className="w-12 h-12 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:rotate-3">
                  <Icon icon={skill.icon} className="w-full h-full object-contain" />
                </div>

                {/* Nombre */}
                <p className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;