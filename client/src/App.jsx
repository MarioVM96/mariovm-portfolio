import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Proyectos from './sections/Proyectos'
import Skills from './sections/Skills'
import Contacto from './sections/Contacto'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Proyectos />
      <Skills />
      <Contacto />
      <Footer />
    </div>
  )
}