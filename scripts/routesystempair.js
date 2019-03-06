/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

'use strict';

import Routes from './routes.js'
import SystemPair from './systempairs.js'

// This class is for holding route-system pairs to be used in engineer screen for self repair.
// System pairs: [MINE + TORPEDO]: MT, [DRONE + SONAR]: DS, [SILENCE + SCENARIO]: SS
// Areas: WEST: W, NORTH: N, SOUTH: S, EAST: E
// Self repair route pairs: (Area, Component)
//      - (W, DS), (W, SS), (W, MT), (E, MT)
//      - (N, SS), (N, MT), (N, SS), (E, DS)
//      - (S, DS), (S, SS), (S, MT), (E, SS)

