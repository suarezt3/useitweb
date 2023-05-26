# Prueba técnica Useit

La siguiente aplicación se desarrolló utilizando Angular, y para la base de datos se usó el servidor en línea supabase, todas las peticiones a la API se realizaron usando el HttpClient de Angular

La aplicación simula un inicio de sesión en una página web, en el cual se debe ingresar un usuario y una contraseña y si las credenciales existen en la base de datos el usuario podrá ingresar y cargara una tabla con una lista de usuarios, en cada fila de la tabla tendrá un botón "Detalles" que al darle clic nos cargara una tarjeta con los detalles del usuario seleccionado, la tarjeta tiene un botón "Volver" donde podremos regresar a la tabla con la lista de usuarios, en la vista de la tabla hay un botón "Salir" para regresar al vista del login

## Validaciones 
Los campos del formulario tienen la validación de requeridos y se le mostrara el error en pantalla, al igual si el usuario intenta ingresar con algunas credenciales invalidas
En la tarjeta de detalles de usuario se implementó un [ngSwitch] para validar los casos en el que usuario es hombre o mujer cargar el avatar correspondiente para cada uno


## servidor de desarrolló
Ejecute ng serve para un servidor dev. Navegue a http://localhost:4200/.

##  deploy
Para el deploy de la aplicación se usó Vercel y se puede ver la aplicación desplegada en el siguiente enlace https://useitweb.vercel.app

## Credenciales para el login
Puede hacer uso de los siguientes nombres de usuario y contraseña para realizar el login en el formulario:

| Usuario   | Contraseña |
| :-------- | :------- | 
| `Natalia` | `Passw0rd1` | 
| `Carolina` | `Passw0rd2` | 
| `Antonio` | `Admin1` | 
| `Camila` | `Admin2` | 
| `Camila` | `Key1` | 
| `Diego` | `Key2` | 
| `Sofia` | `Passkey1` | 
| `Karen` | `Passkey2` | 
