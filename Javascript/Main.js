// //Alle Spieler
// let tim = createPlayer("Tim", "mario");
// let dennis = createPlayer("Dennis", "wario");
// let janna = createPlayer("Janna", "peach");
// let tina = createPlayer("Tina", "luigi");

let germanNames = ["Mia","Emma","Hannah","Sofia","Anna","Emilia","Lina","Marie","Lena","Mila","Emily","Lea","Leonie","Amelie","Sophie","Johanna","Luisa","Clara","Lilly","Laura","Nele","Lara","Charlotte","Leni","Maja","Frieda","Mathilda","Ida","Ella","Pia","Sarah","Lia","Lotta","Greta","Melina","Julia","Paula","Lisa","Marlene","Zoe","Alina","Victoria","Mira","Elisa","Isabella","Helena","Josephine","Mara","Isabell","Nora","Ben","Jonas","Leon","Elias","Finn","Noah","Paul","Luis","Lukas","Luca","Felix","Maximilian","Henry","Max","Emil","Moritz","Jakob","Niklas","Tim","Julian","Oskar","Anton","Philipp","David","Liam","Alexander","Theo","Tom","Mats","Jan","Matteo","Samuel","Erik","Fabian","Milan","Leo","Jonathan","Rafael","Simon","Vincent","Lennard","Carl","Linus","Hannes","Jona","Mika","Jannik","Nico","Till","Johannes"];

let marioCharacters = ["Mario", "Luigi", "Peach", "Daisy", "Yoshi", "Baby Mario", "Baby Luigi", "Baby Peach", "Baby Daisy", "Koopa Troopa", "Shy Guy", "Donkey Kong", "Bowser", "Donkey Kong", "Wario", "Waluigi "];

//Fuunnktion welche Spieler erstellt
/**
 * 
 * @param {*} number Die Anzahl der zu erstellenden Spieler
 */
function playerCreator(number){
    for(let i = 0; i < number; i++){
        createPlayer(arrayElement(germanNames), arrayElement(marioCharacters));
    }
}

//Hilfsfunktion wählt ein zufälliges Array Element aus
/**
 * 
 * @param {*} array Das zu übergebende Array 
 */
function arrayElement(array){
    //Gibt ein zufälliges Array Element zurück
    return array[randomSpan(array.length-1)];
}

//Arry mit Mario Elementen
let marioElements = [
    //Map Namen
    ["Mashroom", "Flower", "Star", "Special"],
    //Schwieriegkeitsstufe
    ["50 cc", "100 cc", "150 cc", "Mirror", "200 cc"],
    //Spieler
    allPlayer
]

/**
 * Ermittelt eine Zahl in einer Spanne von 0-maximal Wert
 * 
 * @param {*} max   Maximal Wert 
 */
function randomSpan(max){
    return Math.floor(Math.random() * Math.floor(max+1));
}

//Ich habe keinen Lust für eine Test Datei guten Code zu schreiben, muss man nicht lesen!!!
//Zum besseren Testen erstelle ich zufällige Spiele
function testTable(gameNumber){
    for(let i=0; i<gameNumber; i++){
        let map = marioElements[0][randomSpan(marioElements[0].length-1)];
        let difficult = marioElements[1][randomSpan(marioElements[1].length-1)];

        //Array mit allen aktuellen Spielern
        let currentPlayer = []


        if(allPlayer.length<=8){
            //Wählt zufällig Spieler aus, sowie ihre Anzahl
            //Mindestens zwei Spieler höchstens 8
            for(let i=0; i<2+randomSpan(allPlayer.length-2); i++){
            let go = true;
            //Der ausgewählte Spieler darf noch nicht vorhanden sein
            while(go){
                //Nimmt einen Spieler zufällig raus
                let playerFigure = arrayElement(allPlayer);

                //Überprüft. ob ein Spieler vorhanden ist
                if(currentPlayer.includes(playerFigure) == false){
                    
                    //Ein Array mit dem Spieler und den Spiel Errungenschaften
                    //Es wird ein Array erstellt mit Spieler, Platzierung und Punkten
                    let achivments = [playerFigure, 1+randomSpan(11), randomSpan(800)];
                    currentPlayer.push(achivments);
                    go=false;
                }
            }
        }
        } else{
            //Wählt zufällig Spieler aus, sowie ihre Anzahl
            //Mindestens zwei Spieler höchstens 8
            for(let i=0; i<2+randomSpan(6); i++){
                let go = true;
                //Der ausgewählte Spieler darf noch nicht vorhanden sein
                while(go){
                    //Nimmt einen Spieler zufällig raus
                    let playerFigure = arrayElement(allPlayer);
    
                    //Überprüft. ob ein Spieler vorhanden ist
                    if(currentPlayer.includes(playerFigure) == false){
                        
                        //Ein Array mit dem Spieler und den Spiel Errungenschaften
                        //Es wird ein Array erstellt mit Spieler, Platzierung und Punkten
                        let achivments = [playerFigure, 1+randomSpan(11), randomSpan(800)];
                        currentPlayer.push(achivments);
                        go=false;
                    }
                }
            }
        }

        //Es wird ein Spiel erstellt anhand der Spieler Anzahl
        createGame(map, difficult, ...currentPlayer);
    }
}

//Erstellt Spieler
playerCreator(25);

//Genenriert Spiele
testTable(100);