const fs = require('fs');
function addInstruments(){
    const newInstrument = prompt("Please enter the name of the instrument you would like to add:")
    if (newInstrument) {
        document.getElementById("instrument").innerHTML += `<option value="${newInstrument}">${newInstrument}</option>`;
        fs.appendFile('instruments.txt', newInstrument + '\n', (err) => {
            if (err) throw err;
            console.log('Instrument added to file!');
        });
    }
}


function showInstruments(options){
    options.forEach(option => {
        const add = document.createElement("option");
        add.value = option;
        add.textContent = option;
        document.getElementById("instrument").appendChild(add);
    });
}