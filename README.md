# API de Gestión de Productos y Usuarios

Esta API permite gestionar productos y usuarios, incluyendo operaciones CRUD sobre productos y el registro/login de usuarios con autenticación mediante JSON Web Tokens (JWT). Además, se utilizan herramientas como **Helmet** para aumentar la seguridad y **Swagger** para documentar la API.

## Endpoints Principales

### Productos (`/api/products`)

- **GET /**: Obtiene todos los productos.
- **GET /:id**: Obtiene un producto por su ID.
- **POST /**: Crea un producto (requiere autenticación y validación).
- **PUT /:id**: Actualiza un producto por su ID (requiere autenticación y validación).
- **DELETE /:id**: Elimina un producto por su ID (requiere autenticación).

### Usuarios (`/api/users`)

- **POST /register**: Registra un nuevo usuario (requiere validación).
- **POST /login**: Autentica a un usuario y genera un token JWT (requiere validación).

## Requisitos

- **Node.js** (v14 o superior).
- **MongoDB**: Base de datos para almacenar los datos de productos y usuarios.
  
## Instalación y Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/agush44/boule.git
   cd boule

2. Instala las dependencias:

    ```bash
    npm install

3. Configura las variables de entorno en un archivo .env:

    ```bash
    PORT=3000
    JWT_SECRET=tu_secreto_jwt
    MONGO_URI=mongodb://localhost:27017/miBaseDeDatos

4. Inicia el servidor:

    ```bash
    npm start
    
El servidor estará disponible en http://localhost:3000.

## Tecnologías Utilizadas

- **Express.js**: Framework de Node.js para construir la API.
- **Mongoose**: ODM para conectar y manejar MongoDB.
- **JSON Web Tokens (JWT)**: Para autenticación de usuarios.
- **Joi**: Para validación de datos de entrada.
- **Helmet**: Middleware para asegurar la aplicación, agregando cabeceras HTTP adicionales de seguridad.
- **Swagger**: Documentación interactiva de la API.

## Arquitectura
El proyecto sigue un modelo MVC (Model-View-Controller) con el uso de middleware para validaciones y autenticación. Las rutas principales están organizadas de la siguiente manera:

- **Rutas de Productos**: Operaciones CRUD para productos.
- **Rutas de Usuarios**: Registro y autenticación.
  
### Estructura de Directorios

- `/config`         - Configuración general (por ejemplo, configuración de la base de datos).
- `/controllers`    - Lógica de negocio (controladores para manejar las rutas).
- `/models`         - Modelos de base de datos (definiciones de esquema con Mongoose).
- `/routes`         - Definición de rutas (productos, usuarios, etc.).
- `/middleware`     - Middleware (validaciones, autenticación, etc.).
- `/docs`           - Documentación Swagger de la API.

## Características de la API

### Validaciones
Se utilizan esquemas de validación con Joi para garantizar que los datos sean correctos antes de procesarlos.

### Autenticación JWT

Se protege rutas sensibles utilizando JWT. Solo los usuarios autenticados pueden realizar ciertas acciones, como crear, actualizar o eliminar productos.

### Seguridad con Helmet

Helmet se utiliza para establecer cabeceras de seguridad HTTP, ayudando a proteger la aplicación de vulnerabilidades comunes como XSS, clickjacking, y otros ataques.

### Documentación con Swagger

La API está documentada utilizando Swagger, lo que permite interactuar con los endpoints de manera fácil y comprender la estructura de las solicitudes y respuestas.

Puedes acceder a la documentación interactiva de la API en http://localhost:3000/api-docs

### Gestión de Errores

Se ha implementado un middleware para gestionar errores, proporcionando respuestas con mensajes apropiados cuando ocurre algún error.
