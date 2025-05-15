# Task Manager App

Este proyecto es un gestor de tareas desarrollado con React en el frontend y Node.js en el backend. Permite a los usuarios organizar sus tareas diarias en secciones basadas en títulos.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `frontend` y `backend`.

### Frontend

La parte del frontend está construida con React y se encarga de la interfaz de usuario. La estructura de archivos es la siguiente:

- `src/App.jsx`: Componente principal que maneja el estado global de las tareas.
- `src/components/TaskList.jsx`: Muestra una lista de secciones de tareas.
- `src/components/TaskSection.jsx`: Representa una sección de tareas y permite agregar nuevas tareas.
- `src/components/TaskForm.jsx`: Permite a los usuarios agregar nuevas tareas.
- `src/index.js`: Punto de entrada de la aplicación frontend.

### Backend

El backend está construido con Node.js y Express, y se encarga de la lógica de negocio y la gestión de datos. La estructura de archivos es la siguiente:

- `src/app.js`: Punto de entrada de la aplicación backend que configura el servidor y las rutas.
- `src/controllers/tasksController.js`: Controlador que maneja la lógica de negocio relacionada con las tareas.
- `src/models/task.js`: Define el modelo de datos para las tareas utilizando Mongoose.
- `src/routes/tasks.js`: Define las rutas para manejar las solicitudes HTTP relacionadas con las tareas.

## Instalación

Para instalar las dependencias del proyecto, navega a las carpetas `frontend` y `backend` y ejecuta:

```bash
npm install
```

## Uso

Para iniciar el servidor backend, navega a la carpeta `backend` y ejecuta:

```bash
npm start
```

Para iniciar la aplicación frontend, navega a la carpeta `frontend` y ejecuta:

```bash
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.