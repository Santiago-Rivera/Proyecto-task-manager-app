# Task Manager App - Backend

Este es el backend de la aplicación de gestión de tareas, que permite organizar las tareas diarias en secciones según el título.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **controllers/**: Contiene los controladores que manejan la lógica de negocio.
    - `tasksController.js`: Controlador para manejar las operaciones relacionadas con las tareas.
  - **models/**: Contiene los modelos de datos.
    - `task.js`: Modelo de Mongoose que define la estructura de las tareas.
  - **routes/**: Contiene las definiciones de las rutas de la API.
    - `tasks.js`: Rutas para manejar las solicitudes HTTP relacionadas con las tareas.
  - `app.js`: Punto de entrada de la aplicación que configura el servidor Express y las rutas.

## Instalación

1. Clona el repositorio:
  
   git clone <URL_DEL_REPOSITORIO>
  
2. Navega al directorio del backend:
  
   cd task-manager-app/backend
  
3. Instala las dependencias:
  
   npm install
  
## Uso

Para iniciar el servidor, ejecuta el siguiente comando en el directorio del backend:

npm start

El servidor se ejecutará en `http://localhost:3000` (puedes cambiar el puerto en `app.js` si es necesario).

## API

### Rutas

- `GET /tasks`: Obtiene todas las tareas.
- `POST /tasks`: Agrega una nueva tarea.
- `PUT /tasks/:id`: Actualiza una tarea existente.
- `DELETE /tasks/:id`: Elimina una tarea.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
