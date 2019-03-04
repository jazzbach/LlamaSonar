'use strict';

import System from './system.js'

// This class is for holding system pairs to be used by engineer.
// Every time captain decides on a route, engineer crosses a system pair.
// System pairs: [MINE + TORPEDO]: MT, [DRONE + SONAR]: DS, [SILENCE + SCENARIO]: SS
// This class will be used for building routeservice.js script.

export default class SystemPair{
    constructor(system1, system2){
        this.system1 = system1;
        this.system2 = system2;
    }
}