# presupuestos

![mongoDB](https://img.shields.io/badge/-mongoDB-brightgreen) ![express](https://img.shields.io/badge/-Express-lightgrey) ![react](https://img.shields.io/badge/-React-blue) ![Node](https://img.shields.io/badge/-Node-success)
  
IMPORTANTE EN EL SIGUIENTE VIDEO SE MUESTRA LA FUNCIONALIDAD DE LA APLICACION  
https://www.youtube.com/watch?v=5VmAWSLC3OM&ab_channel=DanilN.  
  
El proposito de este proyecto fue crear una app web donde el usuario pudiera crear presupuestos de los productos del negocio de serigrafia para que el administrador pueda ver dichos presupuestos, el administrador podrá crear los productos y ver los presupuestos de los usuarios. El usuario podrá agregar productos al "carrito" y crear presupuestos.

Paso 1: Bajar el repositorio a tu computadora  
  
Paso 2: Bajar mongoDB Compass de:  
https://www.mongodb.com/try/download/compass  
Descargas la version para tu sistema operativo he instalas todo en default  
  
Paso 3: Inicializar el cliente y el servidor  
Abrir una terminal y entrar en la carpeta de cliente, una vez ahí correr el comando  
```bash
npm install
```
Después de que se termine de instalar correr el commando  
```bash
npm start
```
En caso de que mande un error  
```bash
> HOST=localhost react-scripts start

'HOST' is not recognized as an internal or external command,
operable program or batch file.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! client@0.1.0 start: `HOST=localhost react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the client@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.  

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\dan-g\AppData\Roaming\npm-cache\_logs\2020-12-02T02_58_17_322Z-debug.log     
```
Abrir el archivo package.json y modificar la linea  
```json
"start": "HOST=localhost react-scripts start",
```
Para que sea  
```json
"start": "react-scripts start",
```
Una vez hecho esto, volver a correr  
```bash
npm start
```
El servidor deveria estar levantado en el puerto 3000 del localhost  
Ahora hay que levantar el servidor, para eso abrimos otra terminal y nos colocamos en la carpeta de server de nuestro proyecto. Una vez ahí, corremos de nuevo los mismos comandos que en el cliente  
```bash
npm install
```
Después de que se termine de instalar correr el commando  
```bash
npm start
```  
Esto levantara el servidor en el puerto 8000.  
  
Paso 4: Conectarse a la base de datos  
Abrir MongoDB Compass y crear su usuario.
Una vez hecho esto ir a "New Connection" y poner en la nueva conexión  
mongodb://localhost:27017  
Esto te mandara a la base de datos donde se guardaran las cosas.  
Nota 1: El nombre de la base de datos es "pres", inicialmente estara vacia, esto debido a que las colecciones se crean cuando le metes información.  
Nota 2: En caso de que te pida crear una colección y/o la base de datos, crear la base de datos con nombre "pres" y la colección con nombre "users".  
  
Paso 5: Crear la cuenta administrador.  
Una vez inicializado todo, registrate en la página, ya sea a través del boton de registrarse o entrando en iniciar sesión he iniciar sesión con google. Te daras cuenta que iniciaste sesión porque en la esquina superior derecha sale la parte inicial de tu dirección de correo electronico. Ahí cerraras sesión y te dirigiras a MongoDB Compass. A la hora de refrescar la base de datos en MongoDB, te aparecera el usuario que creaste:  
```json
{
"_id":{"$oid":"5fc2e0a0ec224d659cdf7092"},
"role":"customer",
"email":"daniel.armando.nd@gmail.com",
"name":"Daniel Armando Núñez Delgadillo",
"createdAt":{"$date":"2020-11-28T23:43:28.882Z"},
"updatedAt":{"$date":"2020-12-02T00:52:26.070Z"},
"__v":0
}
```
Aquí deberas seleccionar la pluma que aparece a la derecha cuando pasas el cursor y cambiar el rol a "admin" y presionar update que se encuentra en la esquina inferior derecha.  
```json
{
"_id":{"$oid":"5fc2e0a0ec224d659cdf7092"},
"role":"admin",
"email":"daniel.armando.nd@gmail.com",
"name":"Daniel Armando Núñez Delgadillo",
"createdAt":{"$date":"2020-11-28T23:43:28.882Z"},
"updatedAt":{"$date":"2020-12-02T00:52:26.070Z"},
"__v":0
}
```  
Ahora ya tienes un administrador.  
  
Paso 6: Crear productos  
Una vez hechos estos cambios, vuelves a iniciar sesión con tu usuario administrador, este te mandará al dashboard de administrador donde podrás crear tus productos.  
Defines el nombre del producto, una descripción más detallada del producto, su categoria, pasas el url de la imagen del producto, defines si el precio se va a manejar por área o cantidad, e introduces los datos del precio según salgan. Después precionas el botón de "Agregar Producto" este producto ya se encuentra en tu base de datos y se vizualiza en el inicio.  
  
  Notas aparte:  
  No se logro hacer el deployment de la aplicación, tuvimos problemas con las variables de ambiente del cliente y eso evito que se pudiera hacer login de la aplicación por lo tanto no se pudo probar si la base de datos en línea este funcionando, aunque, si levantas el cliente y servidor localmente y luego entras al proyecto en el deploy, si podras iniciar sesión y ver los productos de tu base de datos local, esto debido a que carga tus datos locales.
