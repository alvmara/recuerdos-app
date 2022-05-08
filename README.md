# Recuerdos App

### La aplicación para inmortalizar los recuerdos de tus viajes


![Imagen aplicación](/screenshots/imagen1.png)

#### Descripción del proyecto
El proyecto consiste en 3 piezas fundamentales: Un backend, una base de datos y un frontend.


#### Desarrollo
Para el desarrollo se ha seguido una aproximación Outside-In. Se han Dockerizado las aplicaciones de forma que agiliza el desarrollo y la puesta en producción con el uso de Docker Compose.

#### Backend

Para el desarrollo del Backend se ha empleado el framework web [NestJS](https://nestjs.com). NestJS se basa en [TypeScript](https://www.typescriptlang.org/), por lo que ha sido necesario aprender y familiarizarse con la sintaxis de TypeScript.

##### Dependencias utilizadas


  Nombre                 | Versión | Descripción   
  -----------------------|---------|--------------------------|
**@nestjs/common**           | 8.0.0   | Paquete **common** del framework NestJS | 
**@nestjs/config**           | 2.0.0   | Paquete **config** del framework Nest. Usado para leer configuración en ficheros .env |
**@nestjs/core**             | 8.0.0   | Paquete **core** del framework NestJS                         |
**@nestjs/jwt**              | 8.0.0   | Paquete **jwt** del framework NestJS. Nos provee de las herramientas necesarias para realizar la estrategia de autenticación mediante JWT |
**@nestjs/passport**         | 8.2.1   | Paquete **passport** del framework NestJS. Nos provee de las herramientas necesarias para realizar estrategias de autenticación|
**@nestjs/platform-express** | 8.0.0   | Paquete **platform-express** del framework NestJS |
**@nestjs/typeorm**          | 8.0.3   | Paquete **typeorm** del framework NestJS. ORM utilizado para la base de datos. |
**bcrypt**                   | 5.0.1   | Nos provee de algoritmos de cifrado como el sha512 |
**passport-jwt**             | 4.0.0   | Nos provee de las herramientas necesarias para realizar la estrategia de autenticación mediante JWT |
**passport-local**           | 1.0.0   | Nos provee de las herramientas necesarias para realizar la estrategia de autenticación |
**pg**                       | 8.7.3   | Driver de postgres utilizado por TypeORM |
**reflect-metadata**         | 0.1.13  | Herramienta para utilizar Reflexión en TypeScript. Usado por TypeORM para inyectar metadata en las clases |
**rimraf**                   | 3.0.2   | Herramienta de utilidad empleada por el build de NestJS |
**rxjs**                     | 7.2.0   | Librería para trabajar con Observables. Usada por NestJS |
**typeorm**                  | 0.2.45  | Framework ORM |
**uuidv4**                   | 6.2.13  | Herramienta para generar identificadores únicos |


#### Frontend

Nombre                          | Versión | Descipción        |
--------------------------------|---------|-------------------|
**@emotion/react**              | 11.9.0  | Paquete de animaciones utilizado por MUI |
**@emotion/styled**             | 11.8.1  |Paquete para hacer "Styled Components" usado por MUI
**@mui/icons-material**         | 5.6.2   | Paquete de iconos de Google material usado por MUI
**@mui/material**               | 5.6.4   | Framework de UI Components basado en Material Design
**@testing-library/jest-dom**   | 5.16.4  | Paquete para tsting unitario
**@testing-library/react**      | 13.1.1  | Paquete para testing desde el punto de vista del usuario
**@testing-library/user-event** | 13.5.0  | Paquete para testing desde el punto de vista del usuario
**react**                       | 18.1.0  | React
**react-dom**                   | 18.1.0  | React
**react-dropzone**              | 14.2.0  | Provee herramientas para crear Dropzones
**react-redux**                 | 8.0.1   | Redux
**react-responsive-carousel**   | 3.2.23  | Nos provee herramientas para realizar galerías de imágenes
**react-router-dom**            | 6.3.0   | Router
**react-scripts**               | 5.0.1   | Building
**redux**                       | 4.2.0   | Redux
**redux-localstorage**          | 0.4.1   | Middleware Redux Localstorage
**usehooks-ts**                 | 2.5.2   | Paquete de hooks útiles
**web-vitals**                  | 2.1.4   | Reportes de Web Performance

#### Deploy
Para el deploy se ha utilizado Heroku. Se ha seguido [este tutorial](https://medium.com/softup-technologies/how-to-deploy-a-monorepo-to-multiple-heroku-apps-using-github-actions-65e87dc27878) para desplegar el proyecto debido a que tanto el código del cliente y servidor están en el mismo repositorio.

Así pues se han creado dos aplicaciones en Heroku, una para el Backend, a la cual le aprovisionamos de una base de datos Postgres, y otra para el Frontend. 


* [Api](https://sleepy-sea-52043.herokuapp.com/)
* [Frontend](https://fathomless-coast-75887.herokuapp.com/)