# Laravel 12 con Intertia 2

Integración de Laravel 12 con Intertia 2.


### 1. Ejecutar docker compose

```sh
docker compose up --build -d
```

### 2. Ejecutar migraciones

```sh
php artisan migrate
```

### o 

```bash
docker exec -it peligro-laravel-app php artisan migrate
```  


### 2. Integración con intertia (si lo haces desde el contenedor que pasé usa docker exec -it peligro-laravel-app composer [tus comandos acá])

 


### instalar intertia

```bash
composer require inertiajs/inertia-laravel
```   

### instalar inertia para react

```bash
npm install @inertiajs/react
```

### instalar vite para react

```bash
npm install --save-dev @vitejs/plugin-react
```

### instalar react y react-dom

```bash
npm install react react-dom
```

### crear middleware para inertia

```bash
php artisan inertia:middleware
```

### Agregar nuevo middleware al archivo bootstrap/app.php

```php
use App\Http\Middleware\HandleInertiaRequests;

->withMiddleware(function (Middleware $middleware) {
    $middleware->web(append: [
        HandleInertiaRequests::class,
    ]);
})
```

### agregar react al proyecto vite en vite.config.js

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react()
    ],
    
    server: {
        port: 5174,//opcional si quieres salir en otro puerto que no sea el 5173
      }
});

```