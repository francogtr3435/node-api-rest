# node-api-rest
- **Proyecto Final** API REST en NODE.JS
- **Autor:** Franco Gruppi

## Descripcion de la API
El proyecto se basa en diseñar, desarrollar y desplegar una API REST. El sistema debe permitir a los usuarios realizar operaciones sobre los productos, además de almacenar los datos.

## Funcionaes
- Lista de productos.
- Búsqueda por ID.
- Alta, eliminación y modificación.

## Requerimientos Técnicos
**Configuración Inicial**
Crear carpeta del proyecto con un index.js.
Iniciar con npm init -y.
Configurar "type": "module" en package.json.
Crear script start para ejecutar con npm run start.

**Instalación de Dependencias**
- express
- cors
- body-parser
- dotenv
- firebase 
- jsonwebtoken

**Configuración del Servidor**
- servidor con Express.
- Configurar CORS y body-parser.
- Manejo de rutas no definidas (error 404).
- Archivo .env para variables de entorno.

**Rutas**
- GET /api/products (Listar de productos)
- GET /api/products/:id (Obtiene producto por ID)
- POST /api/products/create (Nuevo producto)
- DELETE /api/products/:id – (Eliminar producto por ID)
- POST /auth/login (Validar usuario y devolver token)

**Controllers** 
- Maneja las rutas.

**Services**
- Llama a los models.

**Autenticación y Seguridad**
- Configurar JWT.
- Middleware de autenticación.
- Proteger rutas sensibles.
- En login, validar credenciales y devolver token Bearer.

**Codigos de estados**
- 200/201 todo salio bien 
- 400/401/403/404 errores de cliente  
- 500 errores de servidor.

##  Tecnologías usadas en el proyecto
- Node.js
- Express.js
- Firebase 
- Firestore
- Json WEB Token 
- Vercel

##  Estructura del proyecto
```
📁 src/
    ├─ 📁 controllers
    │       ├─ 📄 auth.controller.js
    │       ├─ 📄 products.controller.js
    ├─ 📁 middlewares
    │       ├─ 📄 auth.middleware.js
    ├─ 📁 models
    │       ├─ 📄 data.js
    │       ├─ 📄 products.model.js
    ├─ 📁 routes
    │       ├─ 📄 auth.router.js
    │       ├─ 📄 products.router.js
    └─ 📁 services
            └─ 📄 products.services.js
```
            
## Vercel
https://node-api-rest-phi-seven.vercel.app/
