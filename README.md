Assemble starter kit
====================

Assemble starter kit for generating static sites (landing pages, brochure sites, blogs etc).

- [Use cases](#use-cases)
- [Components](#components)
- [Tech stack](#tech-stack)
- [Install](#install)
- [Workflow](#workflow)

## Use cases

- final product is HTML/CSS/JS files
- CMS is not required
- custom design

## Components

Available at [http://localhost:4001/examples](http://localhost:4001/examples).

- [x] [Sticky footer](http://localhost:4001/examples/sticky-footer)
- [ ] Aspect ratio box
- [ ] Images lazy load
- [ ] Scroll to content
- [x] [Copyright](http://localhost:4001/examples/copyright)
- [ ] Twitter card meta tags
- [ ] Google Analytics tag
- [ ] Google events
- [ ] OG meta tags
- [ ] Share buttons
- [x] Follow buttons

## Tech stack

- Assemble.io
- Grunt
- PostCSS, BEM
- Handlebars
- ES6, Babel, Browserify
- Mocha, Chai, Sinon

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

