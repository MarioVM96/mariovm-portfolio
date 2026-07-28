# Mi Portafolio Profesional - Mario Valero

Bienvenidos a mi portafolio web personal. Este sitio está diseñado para mostrar mi trayectoria, habilidades técnicas y la galería de proyectos de software que he desarrollado como ingeniero de software.

**Link del proyecto en vivo:** https://mariovm96.github.io/mariovm-portfolio/

---

## Tecnologías y Herramientas Utilizadas

El sitio web está construido bajo una arquitectura modular y moderna utilizando el ecosistema de JavaScript:

* **Frontend:** React 19 (Hooks, Context) + Vite (Bundler ultra rápido)
* **Estilos:** Tailwind CSS (Diseño responsivo, animaciones nativas)
* **Iconos y Animaciones:** Iconify (Logos tecnológicos vectoriales) + Headroom.js (Navbar dinámico)
* **Despliegue:** GitHub Pages (Automatizado con scripts de `gh-pages`)

---

## 🌌 Características Principales

* **Diseño 100% Responsivo:** Adaptado perfectamente para una lectura óptima en dispositivos móviles, tablets y computadoras de escritorio.
* **Skills en Movimiento:** Carrusel horizontal infinito que muestra de forma dinámica mi stack tecnológico a color.
* **Efectos Visuales Premium:** Fondos oscuros con iluminación trasera difuminada (*Glow effects*) y micro-interacciones físicas al pasar el cursor sobre las tarjetas.
* **Sección Acerca de Mí:** Estructura asimétrica tipo *Bento Grid* que resume de forma ejecutiva mis hitos de experiencia laboral y bootcamp.
* **Galería de Proyectos Dinámica:** Tarjetas con maquetas (*mockups*) integradas que escalan de forma responsiva sin recortar la visualización de la interfaz.

---

## Arquitectura del Proyecto

El repositorio está organizado dividiendo el entorno del cliente de forma independiente para permitir escalabilidad a futuro (Front/Back):

```text
mariovm-portfolio/ (Raíz del Proyecto)
├── client/            # Entorno del Frontend (React + Vite)
│   ├── public/        # Recursos estáticos globales
│   └── src/
│       ├── assets/    # Capturas de pantalla e imágenes locales
│       ├── components/# Piezas de código reutilizables (Navbar, Cards)
│       ├── data/      # Archivos de datos simulados en JavaScript
│       ├── sections/  # Bloques principales de la página (Hero, About, Projects)
│       ├── App.jsx    # Punto de ensamble de las secciones
│       └── main.jsx   # Inicializador de la aplicación
├── .gitignore         # Protección de node_modules a nivel global
└── README.md          # Documentación general del repositorio
```

---

## Contacto

¿Te interesa mi perfil técnico para alguna vacante o colaboración de software? ¡Hablemos!

* **LinkedIn:** https://www.linkedin.com/in/mavm9610/
* **GitHub:** https://github.com/MarioVM96
