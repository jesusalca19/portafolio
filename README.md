# Portfolio Jesús Alcaraz

Portfolio profesional estático desarrollado con React, Vite, Tailwind CSS y Framer Motion.

## Objetivo

Presentar el perfil de Jesús Alcaraz como Desarrollador Web Full Stack especializado en e-commerce, con foco en PrestaShop, Shopify, WordPress, PHP, JavaScript, Symfony, MySQL, rendimiento web y SEO técnico.

## Tecnologías

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Previsualizar el build

```bash
npm run preview
```

## Despliegue en GitHub Pages

El proyecto está configurado para publicarse en:

```text
https://jesusalca19.github.io/portafolio/
```

La base de Vite está definida en `vite.config.js` como:

```js
base: '/portafolio/'
```

### Opción recomendada: GitHub Actions

El workflow `.github/workflows/deploy.yml` compila el proyecto y publica `dist` en GitHub Pages cuando se hace push a `main`.

En GitHub, revisa:

1. Settings
2. Pages
3. Source: GitHub Actions

### Opción manual

También puedes desplegar con:

```bash
npm run deploy
```

Este comando usa `gh-pages` para publicar la carpeta `dist`.

## Personalización pendiente

- Añadir foto profesional si se decide incluir más adelante.
- Actualizar contenidos desde `contenido.md` si cambia la información profesional.
