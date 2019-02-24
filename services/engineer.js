/*
------------------------------ SYMBOLS ------------------------------
    ***     Movement / waiting order
    -       Tasks to do
    +       Make decision
    |->     Send to other teammates
---------------------------------------------------------------------

------------------------------ ENGINEER -----------------------------
Engineer responsibilities:
    - Each time captain announces direction, direction signifies breakdown
    - He crosses out symbols on the screen.
---------------------------------------------------------------------

----------------------------- GAME FLOW -----------------------------

*** Engineer waits for captain's move. ***
*** Engineer makes the first move. ***

First move:
    - Get captain's course: NORTH / SOUTH / WEST / EAST
    - Cross out a system corresponding to the announced course (either central systems or in reactor).
      Systems: [MINE + TORPEDO] / [DRONE + SONAR] / [SILENCE + SCENARIO] / [REACTOR]
        |-> Send crossed system information (breakdown) to captain.
        |-> Send crossed system information (breakdown) to first mate.
    - If all reactors are broken announce DAMAGE. (REACTOR BREAKDOWN)
        |-> Send damage information to captain.
        |-> Send damage information to first mate.
        - Clear all breakdowns.
    - If all systems in a single control panel are crossed, announce DAMAGE. (COMPLETE AREA BREAKDOWN)
        |-> Send damage information to captain.
        |-> Send damage information to first mate.
        - Clear all breakdowns.

*** Engineer waits for first mate if damage is taken due to reactor. ***
*** If first mate crosses damage due to reactors, all reactors are cleared AUTOMATICALLY. ***
*** Engineer waits for captain's move: movement course or surfacing. ***

Second move:
    - Check if captain announced SURFACING. If SURFACING is true, all reactors will be cleared automatically.




---------------------------------------------------------------------
 */



 /*
 ----------------------------- FUNCTIONS -----------------------------

 ---------------------------------------------------------------------
 */