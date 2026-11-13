# 🎬 CineFinder

Aplicación web de búsqueda y descubrimiento de películas desarrollada con **React** y **Vite**. Permite explorar un catálogo de películas, consultar sus detalles, realizar búsquedas y guardar películas favoritas.

## 🚀 Funcionalidades

- **Catálogo de películas:** visualización de películas obtenidas desde una API.
- **Búsqueda en tiempo real:** filtrado de películas por título.
- **Detalles de películas:** consulta de información individual de cada película.
- **Sistema de favoritos:** añadir y eliminar películas de favoritos.
- **Persistencia de datos:** los favoritos se guardan en `localStorage`, por lo que se mantienen al recargar la página.
- **Navegación:** gestión de páginas mediante React Router.
- **Página 404:** gestión de rutas inexistentes.

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- Vite
- React Router
- HTML5
- CSS3
- API REST
- Context API
- Custom Hooks
- LocalStorage

## 📦 Instalación y ejecución

Para ejecutar el proyecto en local, sigue estos pasos:

**1. Clonar el repositorio**

```bash
git clone https://github.com/LAleMF/router-buscador-pelis.git
```

**2. Acceder a la carpeta del proyecto**

```bash
cd router-buscador-pelis
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que podrás acceder a la aplicación.

## 📁 Estructura del proyecto

```text
src/
├── components/    # Componentes reutilizables
├── context/       # Contextos para compartir estado
├── hooks/         # Hooks personalizados
├── pages/         # Páginas de la aplicación
├── App.jsx        # Configuración de rutas y aplicación
└── main.jsx       # Punto de entrada
```

*La estructura puede variar según la organización actual del proyecto.*

## 🎯 Objetivo del proyecto

Este proyecto forma parte de mi aprendizaje y práctica con React. Su desarrollo me ha permitido trabajar con componentes reutilizables, hooks, gestión de estado, Context API, consumo de APIs REST y navegación entre páginas con React Router.

---

Desarrollado como proyecto personal de aprendizaje.