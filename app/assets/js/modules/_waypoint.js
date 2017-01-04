'use strict';

import 'waypoints/lib/noframework.waypoints.js';

export default class Waypoint {

    constructor() {
        this.Waypoint = window.Waypoint;
    }

    set(arr) {
        var waypoints = [];

        for (let i = 0; i < arr.length; i++) {
            waypoints[i] = new window.Waypoint({
                element: arr[i].el,
                handler: arr[i].handler,
                offset: arr[i].offset
            });
        }

        this.waypoints = waypoints;
    }

    disable() {
        for (let waypoint of this.waypoints) {
            waypoint.disable();
        }
    }

    enable() {
        for (let waypoint of this.waypoints) {
            waypoint.enable();
        }
    }

}