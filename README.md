# TEST ZEBRANDS FRON ENT
## Importante - Agregar el token de github
Obtener token https://github.com/settings/tokens

Agregar en el archivo `src\providers\config\provider.js`

## Pasos para ejecutar en modo Development

Paso 1 Instalar librerias:

### `npm install`

Paso 2 Ejecutar proyecto:

### `npm start`

Se ejecuta el proyecto en modo Development.\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.



## Pasos para ejecutar en Prod con PM2

Paso 1 Instalar librerias:

### `npm install`

Paso 2 Contruir proyecto:
### `npm run build`

Construye el proyecto en la carpeta `build`.\

Paso 3 Crear proceso en pm2:

### `pm2 serve build <PORT> --spa --name <NOMBRE>`

Paso 4 Guardar cambios en procesos pm2:
### `pm2 save --force`
