//Super blöd, Möglichkeit wäre ein Button als Objekt zu erstellen
let recent = 0;
let playern = 0;
let diffi = 0;
let mapn = 0;
let points = 0;
let defau = 0;

function createGameHistory(game){
    let output = table(game.reverseRank, game.placements.length, game.difficulty, game.map, game.collectPoints());
    return output;
}

function table(...content){
    let output = "<tr>";
    
    for(let i in content){
        output += "<td>" + arguments[i] + "</td>";
    }
    output += "</tr>";

    return output;
}

/**
 * Gibt die Spielanzeige aus, je nach Sortierung
*/
function readAllGames(){
    
    //Setzt den String zurück
    gamesPlayed = "";
    for(let i in allGames){
        //Erweitert den String um Tabellen Eigenschaften
        gamesPlayed += createGameHistory(allGames[i])
    } 
    document.getElementById("gameHistory").innerHTML =  gamesPlayed;
}

/**
 * Sortiert nach Spieler Nummern
 */
function sortNumber(){
    allGames.sort(function(a, b){return a.placements.length-b.placements.length});
    playern++;
    reverseArray(playern);
    readAllGames(allGames);
}

/**
 * Sortiert nach dem Score
 */
function sortScore(){
    allGames.sort(function(a, b){
        if(a.collectPoints() < b.collectPoints()){
            return -1;
        }else{
            return 1;
        }
    });
    points++;
    reverseArray(points);
    readAllGames(allGames);
}

/**
 * Die Spiele werden nach Schwierigkeit sortiert
 */
function sortDifficulty(){

    allGames.sort(function(a, b){
        if(a.difficulty < b.difficulty){
            return -1;
        }else{
            return 1;
        }
    });
    diffi++;
    reverseArray(diffi);
    readAllGames(allGames);
}

/**
 * Die Spiele werden nach den Maps sortiert
 */
function sortMap(){

    allGames.sort(function(a, b){
        if(a.map < b.map){
            return -1;
        }else{
            return 1;
        }
    });
    mapn++;
    reverseArray(mapn);
    readAllGames(allGames);
}

/**
 * Gibt die Spiel in der Reihenfolge, das letzte zu erst wieder
 */
function sortDefault(){
    allGames.sort(function(a, b){return a.getReverseRank() - b.getReverseRank()});
    recent++;
    reverseArray(recent);
    readAllGames(allGames);
}

/**
 * Das Array wird umgedreht
 * 
 * @param {*} number    Anzahl der klicks eines Buttons
 */
function reverseArray(number){
    //Falls ein Button eine Gerade Anzahl an malen gedrück wurde
    if(number%2==0){
        allGames.reverse();
    }
}

/*
    Soll ersetzt werden
//Initiert die Table je nachdem, welches Spiel das letzte war (Ausgangslage);
sortDefault(allGames);

readAllGames(allGames);
*/

//querySelector ist besser um einzelene Elemente zu erfassen
let line = document.querySelector("#test li").innerHTML;
//Super blöd, Möglichkeit wäre ein Button als Objekt zu erstellen
let recent = 0;
let playern = 0;
let diffi = 0;
let mapn = 0;
let points = 0;
let defau = 0;

function createGameHistory(game){
    let output = table(game.reverseRank, game.placements.length, game.difficulty, game.map, game.collectPoints());
    return output;
}

function table(...content){
    let output = "<tr>";
    
    for(let i in content){
        output += "<td>" + arguments[i] + "</td>";
    }
    output += "</tr>";

    return output;
}

/**
 * Gibt die Spielanzeige aus, je nach Sortierung
*/
function readAllGames(){
    
    //Setzt den String zurück
    gamesPlayed = "";
    for(let i in allGames){
        //Erweitert den String um Tabellen Eigenschaften
        gamesPlayed += createGameHistory(allGames[i])
    } 
    document.getElementById("gameHistory").innerHTML =  gamesPlayed;
}

/**
 * Sortiert nach Spieler Nummern
 */
function sortNumber(){
    allGames.sort(function(a, b){return a.placements.length-b.placements.length});
    playern++;
    reverseArray(playern);
    readAllGames(allGames);
}

/**
 * Sortiert nach dem Score
 */
function sortScore(){
    allGames.sort(function(a, b){
        if(a.collectPoints() < b.collectPoints()){
            return -1;
        }else{
            return 1;
        }
    });
    points++;
    reverseArray(points);
    readAllGames(allGames);
}

/**
 * Die Spiele werden nach Schwierigkeit sortiert
 */
function sortDifficulty(){

    allGames.sort(function(a, b){
        if(a.difficulty < b.difficulty){
            return -1;
        }else{
            return 1;
        }
    });
    diffi++;
    reverseArray(diffi);
    readAllGames(allGames);
}

/**
 * Die Spiele werden nach den Maps sortiert
 */
function sortMap(){

    allGames.sort(function(a, b){
        if(a.map < b.map){
            return -1;
        }else{
            return 1;
        }
    });
    mapn++;
    reverseArray(mapn);
    readAllGames(allGames);
}

/**
 * Gibt die Spiel in der Reihenfolge, das letzte zu erst wieder
 */
function sortDefault(){
    allGames.sort(function(a, b){return a.getReverseRank() - b.getReverseRank()});
    recent++;
    reverseArray(recent);
    readAllGames(allGames);
}

/**
 * Das Array wird umgedreht
 * 
 * @param {*} number    Anzahl der klicks eines Buttons
 */
function reverseArray(number){
    //Falls ein Button eine Gerade Anzahl an malen gedrück wurde
    if(number%2==0){
        allGames.reverse();
    }
}

/*
    Soll ersetzt werden
//Initiert die Table je nachdem, welches Spiel das letzte war (Ausgangslage);
sortDefault(allGames);

readAllGames(allGames);
*/

//querySelector ist besser um einzelene Elemente zu erfassen
let line = document.querySelector("#test li").innerHTML;
