//Diese Klasse dient dazu, Knöpfe(Buttons) zu erstellen
class Buttons {
    /**
     * 
     * @param {*} variableName Den Variablenname, welcher beim erstellen des Knopfes benutzt wurde
     * @param {*} buttonName Die Beschriftung des Knopfes
     * @param {*} array Das zu sortierende Array
     * @param {*} searchElementFunction Eine Funktion, die es erlaubt das Array zu durchsuchen
     */
    constructor(variableName, buttonName, array, searchElementFunction){
        this.clickTime = 0;
        this.buttonName = buttonName;
        this.searchElementFunction = searchElementFunction;
        this.array = array;
        this.variableName = variableName;
    }
    
    //Gibt wieder, ob der Knopf eine gerade Anzahl gedrück wurde
    isClickTimeEven(){
        //Wahr, falls die Anzahl an klicks gerade ist
        if(clickTime%2 == 0){
            return true;
        //Wenn es nicht gerade ist, wird falsch wieder gegeben
        } else {
            return false;
        }
    }

    /**
     * Das Array wird umgedreht bei jeden zweiten klick
     * */
    reverseArray(){
        //Falls ein Button eine Gerade Anzahl an malen gedrück wurde
        if(this.clickTime%2==0){
            this.array.reverse();
        }
    }

    addClickTime(){
        this.clickTime++;
    }

    //Sortiert die jeweiligen Elemente
    sortElements(){;
        //Hier wird die Methode übergeben, welche das zu suchende Element wiedergibt
        let searchableElement = this.searchElementFunction;
        this.array.sort(function(a, b){
            if(searchableElement(a) < searchableElement(b)){
                return -1;
            }else{
                return 1;
            }
        });
        //Dreht das Array bei jedem 2. klick um
        this.reverseArray();
    }


    //Erstellt einen String mit HTML-code
    toString(){
        //Wenn ein Knopf gedrück wird, soll das Array dementsprechend sortiert werden,
        //aber auch die Klickzahl mitgezält und die Tabelle neu geladen werden
        return "<button onclick='" + this.variableName + ".sortElements(); refreshTable(); " 
        + this.variableName + ".addClickTime()'>" + this.buttonName + "</button>";
    }

}

/**
 * Erstellt einen Knopf und fügt diesem gleich den Array mit allen Knöpfen hinzu
 * 
 * @param {*} buttonArray Ein Array mit allen Buttons der jeweiligen instanz
* @param {*} variableName Den Variablenname, welcher beim erstellen des Knopfes benutzt wurde
* @param {*} buttonName Die Beschriftung des Knopfes
* @param {*} array Das zu sortierende Array
* @param {*} searchElementFunction Eine Funktion, die es erlaubt das Array zu durchsuchen
*/
function createButton(buttonArray, variableName, buttonName, array, searchElementFunction){
    button = new Buttons(variableName, buttonName, array, searchElementFunction);
    buttonArray.push(button);
    return button
}