'use strict';

import 'waypoints/lib/noframework.waypoints.js';

export default class Waypoint {

    constructor() {
        this.Waypoint = window.Waypoint;
        this.waypoints = [];
    }

    set(waypoints) {
        waypoints.forEach((waypoint) => {
            var instance = new this.Waypoint(waypoint);
            this.waypoints.push(instance);
        });
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