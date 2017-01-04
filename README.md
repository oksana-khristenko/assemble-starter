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
- [x] [Grid](http://localhost:4001/examples/grid)
- [x] [Aspect ratio box](http://localhost:4001/examples/aspect-ratio)
- [ ] Images lazy load
- [x] [Scroll to content](http://localhost:4001/examples/scroll)
- [x] [Copyright](http://localhost:4001/examples/copyright)
- [x] Twitter card meta tags (summary large image only)
- [x] Google Analytics tag
- [ ] OG meta tags
- [x] Canonical URL in HTML head
- [x] [Follow buttons](http://localhost:4001/examples/follow)
- [ ] Share buttons
- [ ] Google Analytics events

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

### Remove examples

Removes example files.

Run `npm run removeExamples` from project root.
