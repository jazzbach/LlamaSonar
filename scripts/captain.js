/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

// #region Captain Information
/*
------------------------------ SYMBOLS ------------------------------
    ***     Movement / waiting order
    -       Tasks to do
    +       Make decision
    |->     Send to other teammates
---------------------------------------------------------------------

------------------------------ CAPTAIN ------------------------------
Captain's main responsibilities:
    - Guiding submarine
    - Coordinating team members
---------------------------------------------------------------------

----------------------------- GAME FLOW -----------------------------

*** Captain makes the first move. ***

First move:
    - Choose a starting point.
        |-> Send it to radio operator.
    - Draw the starting point onto the map.
    - Announce course to other players: NORTH / SOUTH / EAST / WEST
        |-> Send it to radio operator.
        |-> Send it to first mate.
        |-> Send it to engineer.
    - Draw the course onto the map.


*** Captain waits for the first mate, engineer and radio operator to perform their tasks. ***
*** Captain makes the second move. ***

Second move:
    - Get crossed system information from engineer.
        *** If AT LEAST 1 system is crossed, captain cannot use it! Disable captain's system automatically. ***
    - Get used system information from first mate.
    - Get possible enemy location from radio operator.
    + Decide to repair the reactor: SURFACING
        |-> If surface, send surfacing information to engineer.
    + Decide to use AVAILABLE systems: MINE / TORPEDO / DRONE / SONAR / SILENCE / RADIATION
        |-> Ifnform

---------------------------------------------------------------------
*/
// #endregion Captain Information

/*
----------------------------- VARIABLES -----------------------------
let coursePoints = []      // List for holding all points passed by submarine

---------------------------------------------------------------------

----------------------------- FUNCTIONS -----------------------------
SetStartingPoint()
{
    - Set position x,y
    - Draw current position onto the map
    - UpdateCourse(coursePoints[])

    - Send position to radio operator
}

SetCourse()
{
    - Traverse points on CoursePoints[]
        - Enable / disable NORTH / SOUTH / EAST / WEST buttons
    - Get click from buttons: NORTH / SOUTH / EAST / WEST
    - UpdateCourse(coursePoints[])

    - Send course to radio operator.
    - Send course to first mate.
    - Send course to engineer.
}

UpdateCourse(coursePoints[])
{
    - Add position to CoursePoints[]
}

UseSystem()
{

}
---------------------------------------------------------------------
*/