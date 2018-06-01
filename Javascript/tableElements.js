/**
 * Es wird anhand von HTML tabellen Elementen ein Tabellen Eintrag erstellt
 * 
 * @param {*} tableElements Ein Array mit den HTML-th Elementen
 */
function createTablePartTh(tableElements){
    let finalString = "";
    //Get alle HTML Elemente durch und erstellt einen String
    for(let i in tableElements){
        finalString += "<th>" + tableElements[i] + "</th>";
    }
    //Gibt den entgültigen String wieder
    return "<tr>" + finalString + "</tr>";
}

/**
 * Es wird anhand von HTML tabellen Elementen ein Tabellen Eintrag erstellt
 * 
 * @param {*} tableElements die HTML tabellen Einträge
 */
function createTablePartTd(...tableElements){
    let finalString = "";
    //Get alle HTML Elemente durch und erstellt einen String
    for(let i in tableElements){
        finalString += "<td>" + tableElements[i] + "</td>";
    }
    //Gibt den entgültigen String wieder
    return finalString;
}

/**
 * Erstellt eine Tabelle mit den jeweiligen Informationen
 * 
 * @param {*} array Array mit Informationen, die benutzt werden 
 * @param {*} tableInformations Informationen, die in die Tabelle eingetragen werden 
 */
function tableInformationExtended(array, ...tableInformations){
    let output = "";
    //Geht alle Elemente im Array durch
    for(let i in array){
        //Ist dazu da, um alle <td> Elemente zusammen zu fassen
        let temporerString = "";
        //Geht alle Tabellen Informationen durch
        for(let h in tableInformations){
            //Übergibt der Funktion creatTablePartTd, die jeweiligen Array Informationen
            temporerString += createTablePartTd(tableInformations[h](array[i]));
        }    
        //Hält alle <td> Elemente fest, mit <tr> umschlossen
        output += "<tr>" + temporerString + "</tr>";
    }
    //Gibt das fertige Array wieder
    return output;
}