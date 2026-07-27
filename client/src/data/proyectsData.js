import imgBox from "../assets/images/KOFit.png"
import imgPke from "../assets/images/Pokedex.png"

export const projectsData = [
  {
    id: 1,
    title: "Pokédex Fullstack",
    description: "Aplicación fullstack donde los usuarios exploran pokémon, crean equipos y marcan favoritos con autenticación robusta mediante JWT.",
    tags: ["Node.js", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/MarioVM96/Pokedex/tree/main",
    demo: "#",
    image: imgPke
  },
  {
    id: 2,
    title: "Landingpage KOFit",
    description: "Landing page de equipo deportivo de boxeo para un Hackaton. Me encargué del diseño de la sección y de implementar la lógica de negocio para la gestión de productos y el carrito de compras.",
    tags: ["JavaScript", "Bootstrap", "HTML"],
    github: "https://github.com/DIEGOELIASLOPEZ/Hakathon-KOFit",
    demo: "https://kofit.netlify.app/",
    image: imgBox
  }
];