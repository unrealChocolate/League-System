//Enthält all Knöpfe der Liga-Seite
let allButtonsLeaguePage = [];

//Erstellt einzelne Knöpfe
//Spieler Rangliste
let bestPlaceButton = createButton(allButtonsLeaguePage, "bestPlaceButton", "Rank", allPlayer, playerFunctions.rank);

//Namen der Spieler
let nameButton = createButton(allButtonsLeaguePage, "nameButton", "Name", allPlayer, playerFunctions.name);

//Punkte Anzahl
let scoreButton = createButton(allButtonsLeaguePage, "scoreButton", "Score", allPlayer, playerFunctions.score);

//Spiele gespielt
let gameNumberButton = createButton(allButtonsLeaguePage, "gameNumberButton", "Games", allPlayer, playerFunctions.games);

//Array mit Tabellen Informationen, welche gewollt sind
//Position der Elemente ist wichtig, und sollte an den Buttons orientiert sein
let tableInformations = [
    //Spalte 1 besitzt Rang des Spielers
    playerFunctions.rank,
    //Splate 2 besitzt Namen des Spielers
    playerFunctions.name,
    //Spalte 3 besitzt Punktanzahl des Spielers
    playerFunctions.score,
    //Spalte 4 besitzt die Anzahl der Spiele des Spielers
    playerFunctions.games,
]

let tableHead = document.getElementsByTagName("thead");

let tableBody = document.getElementsByTagName("tbody");


/**
 * Fügt Tabellen Elemente ins Dokument ein
 */
function refreshTable(){
    //Erstellt HTML-th Elemente im Tabellen Kopfbereich
    tableHead[0].innerHTML = createTablePartTh(allButtonsLeaguePage);
    //Erstellt HTML-td Elemente im Tabellen Körperbereich
    tableBody[0].innerHTML = tableInformationExtended(allPlayer, ...tableInformations);
}

//Lädt die Tabelle einmal zu Beginn
refreshTable();