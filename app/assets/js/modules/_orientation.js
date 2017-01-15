'use strict';

import $ from 'jquery';

import Window from './_window';

export default class Orientation {

    constructor() {
        this.window = new Window();
    }

    getWidthToHeightRatio() {
        return this.window.getWidth() / this.window.getHeight();
    }

    getName() {
        return this.getWidthToHeightRatio() <= 1 ? 'portrait' : 'landscape';
    }

}