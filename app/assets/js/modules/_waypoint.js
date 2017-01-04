'use strict';

import 'waypoints/lib/noframework.waypoints.js';

export default class Waypoint {

    constructor() {
        this.Waypoint = window.Waypoint;
        this.waypoints = [];
    }

    set(waypoints) {
        waypoints.forEach((waypoint) => {
            this.add(
                this.getWaypointInstance(waypoint)
            );
        });
    }

    getWaypointInstance(waypoint) {
        return new this.Waypoint({
            element: waypoint.el,
            handler: waypoint.handler,
            offset: waypoint.offset
        });
    }

    add(waypoint) {
        this.waypoints.push(waypoint);
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