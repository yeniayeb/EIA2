let sequencearray: string[] = [];

window.addEventListener ("load", handleLoad);

function handleLoad (_event: Event ): void {
    //Daten speichern  
    let savebutton: HTMLElement = <HTMLElement>document.querySelector("#save");
    savebutton.addEventListener ("click", SaveData);
    //Spiel starten
    let startbutton: HTMLElement = <HTMLElement>document.querySelector("#button");
    startbutton.addEventListener("click", StartGame);

    let select: HTMLElement = <HTMLElement>document.querySelector("select");
    select.addEventListener("click", SelectSequence);

}
function SelectSequence (_event: Event): void {
    console.log("get value");
    let selected: HTMLInputElement = <HTMLInputElement>document.querySelector("#select");
    let output = selected.value;
    console.log(output);
    sequencearray.push(output);
    //Console wird geleert und dann neu befüllt
    sequencearray = [];
    sequencearray.push(output);
    console.log(sequencearray);

}

function SaveData (_event: Event): void {
    //Eingabe Feld speichern
    let valueinput = document.querySelector("input").value;
    sequencearray.push(valueinput);
    console.log(sequencearray);

    //Zeit eingeben und speichern
    let timevalue = document.querySelector("#timeinput");
    let timearray: string[] = [];
    timevalue.addEventListener("input", function() {
        // timevalue

    }); 
}

function shuffleCards(_event: Event): void {
    //Array in einen String umwandeln
    let change = sequencearray.toString();
    console.log("zeig" + change);
    //Das Wort in einzelne Buchstaben aufteilen
    change.split (" ");
    let i: number = 0;
    for (i = 0; i < change.length + 1; i++) {
        let letter = change[i];
        console.log(change[i]);
    }
    //Buchstaben mischen 
    for (i = 0; i < change.length; i++) {
        let randomValue = change[Math.floor(change.length * Math.random())];
        console.log(randomValue);
        let addcard: HTMLDivElement = <HTMLDivElement>document.createElement("div.card");
        addcard.innerHTML = randomValue;
        document.querySelector("#mail").appendChild(addcard);
        addcard.setAttribute("style", "top: 40%");
        console.log(addcard);

    }
    
}

function StartGame (_event: Event): void {
    console.log("Spiel wird gestartet");
    shuffleCards(_event);
}






