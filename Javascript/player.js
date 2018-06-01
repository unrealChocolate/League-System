class player{
    /**
     * 
     * @param {*} name Der Name des Spielers
     * @param {*} icon Das gewünschte ICON
     */
    constructor(name, icon){
        this.name = name;
        this.icon = icon;
        this.rank = 0;
        this.score = 0;
        this.games = 0;
    }

    setScore(points){
        this.score += points;
    }

    getScore(){
        return this.score;
    }

    setGames(){
        this.games++;
    }

    getGames(){
        return this.games;
    }

    getName(){
        return this.name;
    }

    getRank(){
        return this.rank;
    }

    setRank(rank){
        this.rank = rank;
    }
}

/*
    Ein Array, welches alle Spieler beinhaltet
*/
let allPlayer = [];

/**
 * Erstellt einen neuen Spieler und fügt ihn der Datenbank hinzu
 * 
 * @param name Der Name des Spielers
 * @param icon Das Icon, welches der Spieler haben will
 */
function createPlayer(name, icon){
    let playerIngame = new player(name, icon);
    allPlayer.push(playerIngame);
    return playerIngame;
}

/**
 * Entfernt den Spieler aus dem Programm und der Datenbank aller Spieler
 * Bis jetzt noch nicht im Einsatz
 * 
 * @param playerIngame Das zu löschende Spieler Objekt
 */
function removePlayer(playerObject){
    if(allPlayer != null){
        //Entfernt den Spieler aus dem Array
        allPlayer.splice(allPlayer.indexOf(playerObject), 1);
    }
    delete playerObject;
}

//Beinhaltet alle Spieler Funkt
let playerFunctions = {
    name: (player)=> player.getName(),
    score: (player)=> player.getScore(),
    games: (player)=> player.getGames(),
    rank: (player)=> player.getRank(),
}