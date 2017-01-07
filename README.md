Assemble Starter
================

Assemble starter kit for generating static sites (landing pages, brochure sites, blogs etc).

- [Use cases](#use-cases)
- [Components](#components)
- [Tech stack](#tech-stack)
- [Install](#install)
- [Workflow](#workflow)
    - [Project settings](#project-settings)
    - [Development](#development)
    - [Production](#production)

## Use cases

- final product is HTML/CSS/JS files
- CMS is not required
- custom design

## Components

Available at [http://localhost:4001/examples](http://localhost:4001/examples).

- [x] [Sticky footer](http://localhost:4001/examples/sticky-footer)
- [x] [Grid](http://localhost:4001/examples/grid)
- [x] [Aspect ratio](http://codepen.io/oksana-khristenko/pen/egmpBw)
- [x] Image lazy loading
- [x] [Scroll to content](http://localhost:4001/examples/scroll)
- [x] [Copyright](http://localhost:4001/examples/copyright)
- [x] Twitter card (summary large image only)
- [x] Google Analytics tag
- [x] Open graph markup
- [x] Canonical URL in HTML head
- [x] [Follow buttons](http://localhost:4001/examples/follow)
- [ ] Burger menu
- [ ] Share buttons
- [ ] Google Analytics events
- [ ] Lightbox
- [ ] Slider

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

## Project settings

Update project settings in environment config files in `app/config` folder.

Development config `app/config/development.js` should be used for developing locally.

Production config `app/config/production.js` should be used to compile and minify files for production use or to test locally using production settings.

Config settings can be overwritten on page level in page YAML metadata.

### Development

URL: http://localhost:4001

To serve the app for development on local machine using development config `app/config/development.js`, run this command from project root:

`npm start`

To serve the app for development on local machine using production config `app/config/production.js` (e.g. to test production settings), run the following command:

`npm run start:prod`

Run tests and watch for test file changes:

`npm run test:watch`

### Production

To compile and minify HTML files and assets into `dist` folder using production config `app/config/production.js`, run the following command from project root:

`npm run dist`

If required (e.g. for testing), compile using development config instead:

`npm run dist:dev`

### Remove examples

Removes example files.

Run `npm run removeExamples` from project root.
