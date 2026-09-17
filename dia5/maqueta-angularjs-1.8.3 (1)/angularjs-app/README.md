# Maqueta AngularJS 1.8.3 (100% local)

Proyecto inicial ("scaffold") de AngularJS con las librerías incluidas en el propio
proyecto — **no se usa ningún CDN**, así que funciona sin conexión a internet.

> AngularJS **1.8.3** es la última versión publicada de la rama 1.x (la rama está en
> fin de soporte oficial desde enero de 2022). Si necesita el Angular moderno
> (v2+, TypeScript, Angular CLI) es otro framework distinto; dígamelo y se genera esa maqueta.

## Cómo ejecutarlo

Necesita un servidor HTTP porque las vistas se cargan con `templateUrl` y el
navegador bloquea esas peticiones con `file://` (política CORS).

**Opción A — script incluido**

```bash
./servir.sh          # Linux / macOS
servir.bat           # Windows (doble clic)
```

**Opción B — Python**

```bash
python -m http.server 8080
```

**Opción C — Node**

```bash
npx http-server -p 8080 -c-1 .
```

Luego abra: **http://localhost:8080**

## Estructura

```
angularjs-app/
├── index.html                     Punto de entrada + carga de scripts
├── package.json                   Scripts npm (opcional)
├── servir.sh / servir.bat         Servidor estático rápido
├── vendor/angular/                AngularJS 1.8.3 local
│   ├── angular.js / .min.js / .min.js.map
│   ├── angular-route.*            ngRoute
│   ├── angular-animate.*          ngAnimate
│   └── angular-sanitize.*         ngSanitize
├── app/
│   ├── app.module.js              angular.module('miApp', [...])
│   ├── app.config.js              Rutas ($routeProvider)
│   ├── app.run.js                 Bloque run + estado global
│   ├── core/
│   │   ├── config.value.js        constant APP_CONFIG
│   │   └── tareas.service.js      factory con $http y $q
│   ├── shared/
│   │   ├── navbar.html
│   │   ├── navbar.controller.js
│   │   ├── resaltar.directive.js  Directiva de atributo
│   │   └── capitalizar.filter.js  Filtro personalizado
│   └── components/
│       ├── home/    home.html + home.controller.js
│       ├── tareas/  tareas.html + tareas.controller.js   (CRUD)
│       └── acerca/  acerca.html + acerca.controller.js
├── assets/css/styles.css          Estilos propios (sin Bootstrap)
└── data/tareas.json               Datos de ejemplo para $http
```

## Rutas

| URL             | Vista            | Controlador        |
|-----------------|------------------|--------------------|
| `#!/home`       | Inicio           | `HomeController`   |
| `#!/tareas`     | CRUD de tareas   | `TareasController` |
| `#!/acerca`     | Información      | `AcercaController` |
| cualquier otra  | redirige a `/home` | —                |

Se usa el prefijo `#!` (hashbang). Para URLs limpias active
`$locationProvider.html5Mode(true)` en `app/app.config.js`, agregue
`<base href="/">` en `index.html` y configure el servidor para devolver
`index.html` en cualquier ruta.

## Qué demuestra la maqueta

- Patrón un-archivo-por-artefacto con IIFE y `'use strict'`
- Inyección de dependencias explícita con `$inject` (segura al minificar)
- `controllerAs: 'vm'` en lugar de `$scope` suelto
- `resolve` en la ruta para precargar datos antes de renderizar
- Servicio `factory` con `$http` + `$q`, con respaldo en memoria si falla la petición
- Directiva de atributo con scope aislado y limpieza en `$destroy`
- Filtro propio, `ng-repeat`, `filter`, `orderBy`, `ng-model`, `ng-class`, `ng-if`
- `ng-bind-html` con `ngSanitize` y animación de entrada de vistas con `ngAnimate`

## Pasos siguientes sugeridos

1. Usar la versión sin minificar (`angular.js`) durante el desarrollo para ver mejores mensajes de error.
2. Agregar pruebas con Karma + Jasmine (`npm i -D karma karma-jasmine jasmine-core karma-chrome-launcher angular-mocks`).
3. Migrar los controladores a `.component()` — es el paso previo natural si algún día se migra a Angular moderno.

---
Generado para **Jygasoft Code**.
