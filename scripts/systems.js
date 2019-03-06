/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

'use strict';

// This class is for holding systems of the submarine.
const System = {
    MINE: 'MINE',
    TORPEDO: 'TORPEDO',
    DRONE: 'DRONE',
    SONAR: 'SONAR',
    SILENCE: 'SILENCE'
}

export default class Systems {
    constructor(systemName) {
        this.systemName = systemName;
    }
}

System.MINE = new System('MINE');
System.TORPEDO = new System('TORPEDO');
System.DRONE = new System('DRONE');
System.SONAR = new System('SONAR');
System.SILENCE = new System('SILENCE');