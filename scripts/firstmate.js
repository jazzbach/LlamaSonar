// #region First Mate Information
/*
------------------------------ SYMBOLS ------------------------------
    ***     Movement / waiting order
    -       Tasks to do
    +       Make decision
    |->     Send to other teammates
---------------------------------------------------------------------

----------------------------- FIRST MATE ----------------------------
First mate responsibilities:
    - Mark empty space on the system gauges for making them ready
    - Alert captain when systems are ready: MINE / TORPEDO / DRONE / SONAR / SILENCE
---------------------------------------------------------------------

----------------------------- GAME FLOW -----------------------------

*** First mate waits for captain's first move. ***
*** First mate waits for engineer's first move. ***
*** First mate makes the first move. ***

First move:
    - Get breakdown information from engineer: MINE / TORPEDO / DRONE / SONAR / SILENCE / RADIATION
    - If DAMAGE anaouncement get from engineer, cross damage space on top left.
        |-> Clear engineer's reactors.
    - Mark an empty space on a system gauge: MINE / TORPEDO / DRONE / SONAR / SILENCE
    - If system is ready, announce it as ready.
        |-> Send ready information to captain.
        + Decide to use DRONE or SONAR.
            |-> Send used system information to captain, if system is used.

*** First mate waits for captain's second move. ***


---------------------------------------------------------------------
*/
// #endregion First Mate Information

/*
----------------------------- VARIABLES -----------------------------

---------------------------------------------------------------------

----------------------------- FUNCTIONS -----------------------------

---------------------------------------------------------------------
*/