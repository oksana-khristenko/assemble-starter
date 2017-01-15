'use strict';

import $ from 'jquery';

import Window from './_window';
import ClosestNumber from './_closest-number';

export default class Breakpoint {

    constructor(obj) {
        this.breakpoints = [0, 400, 500, 600, 700, 800, 900, 1024, 1100, 1200, 1300];
        this.window = new Window();
    }

    get() {
        var windowWidth = this.window.getWindowWidth();
        var closestBreakpoints = new ClosestNumber(this.breakpoints, windowWidth);

        return closestBreakpoints.lower;
    }

}