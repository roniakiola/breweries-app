# Introduction

Simple app to list different Breweries from API endpoint. User can search for fetched Breweries by their name in search bar. 

Test it out: https://jolly-melomakarona-6ce03d.netlify.app/

## Table of contents

- [Technologies](#technologies)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

## Technologies

- TypeScript
- Material UI
- React
- React Router DOM

## Project structure
```bash
│     .gitignore
│     package.json
│     readme.md
│     tsconfig.json
│
├───public
│       index.html
│       manifest.json
│       robots.txt
│
└───src
    │     App.tsx
    │     index.tsx
    │     react-app-env.d.ts
    │
    ├───components
    │       Navbar.tsx
    │       SearchBrewery.tsx
    │
    ├───functions
    │       debounce.ts
    │
    ├───hooks
    │       useBreweries.ts
    │
    ├───interfaces
    │       interface.Brewery.ts
    │
    └───views
            Home.tsx
            SingleBrewery.tsx
```

## Getting started

1. Use <code>git clone</code> and <code>npm i</code> to install the project.
2. Refer to <code>package.json</code> for scripts to run. Use<code>npm run start</code> to run in dev mode.
