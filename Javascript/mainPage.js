//Enthält alle Knöpfe der Hauptseite
let allButtonsMainPage = [];

//Erstellen der einzelnen Knöpfe
//Das neuste Spiel
let mostRecentButton = createButton(allButtonsMainPage, "mostRecentButton", "Most recent", allGames, gameFunctions.reverseRank);

//Die Spieler Anzahl
let playerNumberButton = createButton(allButtonsMainPage, "playerNumberButton", "Player number", allGames, gameFunctions.playerNumber);

//Die Schwierigkeits Stufe
let difficultyButton = createButton(allButtonsMainPage, "difficultyButton", "Difficulty", allGames, gameFunctions.difficulty);

//Die Karten
let mapButton = createButton(allButtonsMainPage, "mapButton", "Map", allGames, gameFunctions.map);

//Die Punkte Anzahl
let pointsButton = createButton(allButtonsMainPage, "pointsButton", "Points", allGames, gameFunctions.points);


//Der Tabellen Kopf
let tableHead = document.getElementsByTagName("thead");

//Der Tabellen Körper
let tableBody = document.getElementsByTagName("tbody");

//Array mit Tabellen Informationen, welche gewollt sind
let tableInformations = [
    gameFunctions.reverseRank,
    gameFunctions.playerNumber,
    gameFunctions.difficulty,
    gameFunctions.map,
    gameFunctions.points
]

/**
 * Fügt Tabellen Elemente ins Dokument ein
 */
function refreshTable(){
    tableHead[0].innerHTML = createTablePartTh(allButtonsMainPage);
    tableBody[0].innerHTML = tableInformationExtended(allGames, ...tableInformations);
}

refreshTable();