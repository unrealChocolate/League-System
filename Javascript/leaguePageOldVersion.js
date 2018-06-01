function createPlayerRank(player, rankNumber){
    //Die rankNumber muss um eines erhöht werden, da bei 0 gestartet wurde
    rankNumber++;
    let output = table(rankNumber, player.name, player.getScore(), player.getGames());
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

//Es handelt sich hierbei um ein String, was später für die Tabellen Erstellung zuständig ist
let playerRank = "";

function readAllPlayer(allPlayer){
    //Setzt den String zurück
    playerRank = "";
    for(let i in allPlayer){
        playerRank += createPlayerRank(allPlayer[i], i)
    }    
}

//Ich erstelle einen Array mit den Spieler Score um diesen zu sortieren
allPlayer.sort(function(a, b){return b.score - a.score})

readAllPlayer(allPlayer);

//Nicht wirklich das alte, sollte aber reichen
let talbeHead = document.getElementsByTagName("thead");

let tableBody = document.getElementsByTagName("tbody");

tableBody[0].innerHTML = playerRank;