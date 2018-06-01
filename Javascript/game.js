let ranking = 1;

/**
 * Hier werden alle Spieler und ihre Platzierungen übergeben
 * 
 * @param map = 
 * @param playerPlacements Die Spieler, sowie ihre Platzierungen
 */
class Game{
    constructor(map, difficulty, playerPlacements){
        this.map = map;
        this.difficulty = difficulty;
        //Die Spieler und ihre Platzierungen sind Inform eines Arrays gespeicher
        this.placements = playerPlacements;
        //rank hält die aktuellen Spiele als Nummer fest
        this.rank = ranking;
        ranking++;
        this.reverseRank = 0;
    }

    /**
     * Gibt die Karte wieder
     */
    getMap(){
       return this.map;
    }

    /**
     * Gibt die Schwierigkeitsstufe wieder
     */
    getDifficulty(){
        return this.difficulty;
    }

    /**
     * Gibt den umgekehrten Rang(Wie neu das Spiel im Verhältnis ist())
     */
    getReverseRank(){
        return this.reverseRank;
    }

    /**
     * Gibt die Spieler Anzahl wieder
     */
    getPlayerNumber(){
        return this.placements.length;
    }

    /**
     * Gibt den Rang wieder
     */
    getRank(){
        return this.rank;
    }

    /**
     * Zählt die in einem Spiel erhaltenen Punkte
     */
    collectPoints(){
        let totalCoins = 0;

        for(let i in this.placements){
            totalCoins += this.placements[i][2];     
        }
        return totalCoins;

}
}

//Array mit allen gespielten Spielen
let allGames = [];

/**
 * 
 * @param {*} map           Die gespielte Karte
 * @param {*} difficulty    Der Schwierigkeitsgrad
 * @param {*} param2        Der Spieler und ihre Platzierung
 */
function createGame(map, difficulty, ...[players, placements, points]){

    //Array mit allen Spielern
    let playerBase = [];

    //Füllte den Spieler Array mit allen Spielern und ihren Errungenschaften
    for(let i=2; i<arguments.length; i++){
        playerBase.push(arguments[i]);
    }

    //Erstellt ein neues Spiel
    let gamePlayed = new Game(map, difficulty, playerBase);

    allGames.push(gamePlayed);

    //Gibt dem jeweiligen Spieler seine Punkte
    for(let i=3; i<arguments.length; i++){
        arguments[i][0].setScore(arguments[i][2]);
        arguments[i][0].setGames();
    }

    //Gibt jedem Spieler seinen Rang
    defineRank();

    //Gibt jedem Spiel die neue umgekehrte Rang-Nummer
    reverseRank(allGames);

    return gamePlayed;
}

/**
 *  Hilfsfunktion bestimmt Rang der Spieler 
 */
function defineRank(){
    //Sortiert die Spieler nach dem Score
    allPlayer.sort(function(playerA, playerB){
        if(playerA.getRank() < playerB.getRank()){
            return -1;
        }else{
            return 1;
        }
    });

    for(let i in allPlayer){
        //Konvertiert i in integer
        let number = parseInt(i) +1;
        allPlayer[i].setRank(number);
    }
}

/**
 * Updatet die umgekehrte Rangnummer (Letzter Rang - aktueller Rang)
 */
function reverseRank(){
    let currentRank = 0;
    //Sucht den höchsten Rang
    for(let i in allGames){
      if(allGames[i].rank > currentRank){
         currentRank = allGames[i].rank;
        }
    }

    //Gibt die umgekehrte Rangnummer an
    for(let i in allGames){
       allGames[i].reverseRank = currentRank-allGames[i].rank+1;
    }
}

let gameFunctions = {
    map: (game)=> game.getMap(),
    difficulty: (game)=> game.getDifficulty(), 
    reverseRank: (game)=> game.getReverseRank(),
    playerNumber: (game)=> game.getPlayerNumber(),
    rank: (game)=> game.getRank(),
    points: (game)=> game.collectPoints(),
    }