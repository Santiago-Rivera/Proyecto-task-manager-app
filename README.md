# Task Manager App

Este proyecto es un gestor de tareas desarrollado con React en el frontend y Node.js con Express en el backend. Permite a los usuarios organizar sus tareas diarias en secciones según el título.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `backend` y `frontend`.

### Backend

La parte del backend está construida con Node.js y Express. A continuación se describen los archivos más importantes:

- **`src/app.js`**: Punto de entrada de la aplicación backend. Configura el servidor Express y establece las rutas.
- **`src/controllers/tasksController.js`**: Controlador que maneja la lógica de negocio relacionada con las tareas. Incluye métodos para obtener, agregar, actualizar y eliminar tareas.
- **`src/models/task.js`**: Define el modelo `Task` utilizando Mongoose, especificando la estructura de los documentos de tarea en la base de datos.
- **`src/routes/tasks.js`**: Define las rutas para las tareas y utiliza los métodos del `TasksController` para manejar las solicitudes HTTP.
- **`package.json`**: Configuración del backend, incluyendo dependencias y scripts para iniciar el servidor.

### Frontend

La parte del frontend está construida con React. A continuación se describen los archivos más importantes:

- **`src/App.jsx`**: Componente principal de la aplicación frontend que renderiza la lista de tareas y maneja el estado global.
- **`src/components/TaskList.jsx`**: Componente que muestra una lista de secciones de tareas.
- **`src/components/TaskSection.jsx`**: Componente que representa una sección de tareas y permite agregar nuevas tareas.
- **`src/components/TaskForm.jsx`**: Componente que permite a los usuarios agregar nuevas tareas.
- **`src/index.js`**: Punto de entrada de la aplicación frontend que renderiza el componente `App`.
- **`package.json`**: Configuración del frontend, incluyendo dependencias y scripts para iniciar la aplicación.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:

   git clone <URL_DEL_REPOSITORIO>

2. Navega a la carpeta del backend y ejecuta:

   cd backend
   npm install
   npm start

3. En otra terminal, navega a la carpeta del frontend y ejecuta:

   cd frontend
   npm install
   npm start

## Importante

Si el comando npm start te presenta error ejecuta el siguiente comando:
      $env:NODE_OPTIONS="--openssl-legacy-provider"
      npm start

## Uso

Una vez que ambos servidores estén en funcionamiento, podrás acceder a la aplicación frontend en `http://localhost:3000` y gestionar tus tareas diarias organizadas en secciones.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.
