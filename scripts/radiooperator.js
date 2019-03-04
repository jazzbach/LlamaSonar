// #region Radio Operator Information
/*
------------------------------ SYMBOLS ------------------------------
    ***     Movement / waiting order
    -       Tasks to do
    +       Make decision
    |->     Send to other teammates
---------------------------------------------------------------------

--------------------------- RADIO OPERATOR --------------------------
Radio operator responsibilities:
    - Tracking enemy submarine
    - Listening to the captain
---------------------------------------------------------------------

----------------------------- GAME FLOW -----------------------------

*** Radio operator waits for captain's move. ***
*** Radio operator makes the first move. ***

First move:
    - Get starting point from captain.
    - Draw starting point onto the map / Or get captain's map directly.
    + Decide a random starting point for enemy and draw it onto the map.
    - Get course information from enemy captain.
    - Draw course for the enemy onto the map.
        |-> Send enemy's possible location to captain.



---------------------------------------------------------------------
*/
// #endregion Radio Operator Information

/*
----------------------------- VARIABLES -----------------------------
let enemyCourse = []        // List for holding all points passed by enemy submarine
---------------------------------------------------------------------

----------------------------- FUNCTIONS -----------------------------
GetStartingPoint()
{
    - Get starting point defined by captain.
    - Draw starting point onto the map / Or get captain's map directly.
}

SetEnemyStartingPoint()
{
    + Decide a random starting point for enemy and draw it onto the map. (Default can be middle of the map.)
    UpdateEnemyCourse(enemyCourse[])
}

SetEnemyPoint()
{
    - Get course information from enemy captain.
    UpdateEnemyCourse(enemyCourse[])
}

UpdateEnemyCourse(enemyCourse[])
{
    - Add position to enemyCourse[]
}

GuessEnemyPosition()
{
    - Send enemy's possible location to captain.
}
---------------------------------------------------------------------
*/