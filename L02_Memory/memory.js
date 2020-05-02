var sequencearray = [];
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    //Daten speichern  
    var savebutton = document.querySelector("#save");
    savebutton.addEventListener("click", SaveData);
    //Spiel starten
    var startbutton = document.querySelector("#button");
    startbutton.addEventListener("click", StartGame);
    var select = document.querySelector("select");
    select.addEventListener("click", SelectSequence);
}
function SelectSequence(_event) {
    console.log("get value");
    var selected = document.querySelector("#select");
    var output = selected.value;
    console.log(output);
    sequencearray.push(output);
    //Console wird geleert und dann neu befüllt
    sequencearray = [];
    sequencearray.push(output);
    console.log(sequencearray);
}
function SaveData(_event) {
    //Eingabe Feld speichern
    var valueinput = document.querySelector("input").value;
    sequencearray.push(valueinput);
    console.log(sequencearray);
    //Zeit eingeben und speichern
    var timevalue = document.querySelector("#timeinput");
    var timearray = [];
    timevalue.addEventListener("input", function () {
        // timevalue
    });
}
function shuffleCards(_event) {
    //Array in einen String umwandeln
    var change = sequencearray.toString();
    console.log("zeig" + change);
    //Das Wort in einzelne Buchstaben aufteilen
    change.split(" ");
    var i = 0;
    for (i = 0; i < change.length + 1; i++) {
        var letter = change[i];
        console.log(change[i]);
    }
    //Buchstaben mischen 
    for (i = 0; i < change.length; i++) {
        var randomValue = change[Math.floor(change.length * Math.random())];
        console.log(randomValue);
        var addcard = document.createElement("div.card");
        addcard.innerHTML = randomValue;
        document.querySelector("#mail").appendChild(addcard);
        addcard.setAttribute("style", "top: 40%");
        console.log(addcard);
    }
}
function StartGame(_event) {
    console.log("Spiel wird gestartet");
    shuffleCards(_event);
}
//# sourceMappingURL=memory.js.map