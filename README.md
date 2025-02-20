# Drenvio Backend

## Introducción

Este proyecto constituye el backend de la aplicación **Drenvio**. Se desarrolló con **Node.js** y utiliza **Express** para la creación de una API REST que gestiona productos, precios especiales y usuarios. La aplicación se conecta a un clúster de **MongoDB Atlas** para almacenar y recuperar la información.

## Pasos para ejecutar localmente

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/SYepesCommit/apidrenvio.git
   cd apidrenvio
   ```
2. Instalar dependencias:
Asegúrate de tener instalado Node.js (preferiblemente versión 14 o superior) y npm, luego ejecuta:

```bash
npm install
```

3. Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto con la siguiente configuración

```bash
MONGO_URI=mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda
PORT=3000
```

- MONGO_URI: URL de conexión al clúster de MongoDB Atlas proporcionado, apuntando a la base de datos tienda.

4. Ejecutar la aplicación en modo desarrollo:

```bash
node server/server.js
```
- Puedes instalar nodemon y ejecutarlo como segunda opcion:
```bash
nodemon server/server.js
```

## Justificación de elecciones técnicas
- Node.js y Express:
Se eligieron por su eficiencia y popularidad para el desarrollo de APIs REST. Express, en particular, facilita la creación de rutas y middleware, permitiendo un desarrollo rápido y modular.

- MongoDB Atlas:
Se utiliza como base de datos NoSQL por su escalabilidad, flexibilidad y facilidad de integración con Node.js. El clúster proporcionado garantiza un entorno seguro y administrado para el almacenamiento de datos.


## Descripción de la estructura del proyecto

-src/controllers: Contiene la lógica de negocio de cada entidad, separada para facilitar su mantenimiento.
-src/models: Define la estructura de los datos en MongoDB mediante esquemas, permitiendo validación y relaciones entre colecciones.
-src/routes: Agrupa las rutas de la API para cada módulo, haciendo el enrutamiento claro y modular.
-src/services: Encapsula la lógica de integración con la base de datos y otros servicios externos.
.env: Almacena la configuración sensible, como la URL del cluster otorgado.
