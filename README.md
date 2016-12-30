Assemble starter kit
====================

> Assemble starter kit for generating static sites (landing pages, brochure sites, blogs etc). Contains pre-built components.

- [Components](#components)
- [Tech stack](#tech-stack)
- [Install](#install)
- [Workflow](#workflow)
- [Examples](#examples)

## Tech stack

- Assemble.io
- Grunt
- PostCSS, BEM
- Handlebars
- Browserify
- Mocha, Chai, Sinon

## Components

TBC

## Install

- Install [Node.js](https://nodejs.org/)

- Install [nvm](https://github.com/creationix/nvm) if required (node version v7.3.0, npm version 3.10.10)

- Install [ImageOptim](https://imageoptim.com/) desktop app

- Run `npm install` from project root to install node modules

## Workflow

### Update project settings

Update project settings in `app/config.js`.

### Build

Compiles HTML files and assets into `public` folder and makes them available at `http://localhost:4001`.

Run `npm start` from project root.

### Dist

Compiles and minifies HTML files and assets into `dist` folder.

Run `npm run dist` from project root.

### Test

Tests helper files.

Run `npm test` from project root.

## Examples

Available at `http://localhost:4001/examples`