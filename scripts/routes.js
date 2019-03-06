/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

'use strict';

// This class is for holding routes of the submarine.
const Route = {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    WEST: 'WEST',
    EAST: 'EAST'
}

export default class Routes {
    constructor(route) {
        this.route = route;
    }
}

Route.NORTH = new System('NORTH');
Route.SOUTH = new System('SOUTH');
Route.WEST = new System('WEST');
Route.EAST = new System('EAST');