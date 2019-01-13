// Get the form object
var form = document.forms["calculator"];

var autolyse = form.elements["autolyse"];
var starter = form.elements["starter"]
var salt = form.elements["salt"]
var water = form.elements["water"]
var flourOne = form.elements["flourOne"];
var flourTwo = form.elements["flourTwo"];

var autolyse_r = document.querySelector("#autolyse_r");
var starter_r = document.querySelector("#starter_r");
var salt_r = document.querySelector("#salt_r");
var water_r = document.querySelector("#water_r");
var dw = document.querySelector(".dw");
var flourOne_r = document.querySelector("#flourOne_r");
var flourTwo_r = document.querySelector("#flourTwo_r");

form.elements["autolyse"].addEventListener('input', getValue);
form.elements["starter"].addEventListener('input', getValue);
form.elements["salt"].addEventListener('input', getValue);
form.elements["water"].addEventListener('input', getValue);

function getValue(){
    
    if (this.id == "autolyse") {
        autolyse.value = this.value;  
    }
    else if (this.id == "starter") {
        starter.value = this.value;  
    }
    else if (this.id == "salt") {
        salt.value = this.value; 
    }
    else if (this.id == "water") {
        water.value = this.value;        
    }
    else if (this.id == "flourOne") {
        flourOne.value = this.value;
    }
    else if (this.id == "flourTwo") {
        flourTwo.value = this.value;
    }
}

var btn = document.querySelector(".calculate");
btn.addEventListener("click", calculate);

function calculate(){

    // initialize variables
    var autolyseWeight = autolyse.value * 1;
    var starterWeight = autolyseWeight * starter.value;
    var halfStarter = starterWeight / 2
    // variable name doughWeight does not represent doughWeight
    var doughWeight = halfStarter + autolyseWeight;
    var saltWeight = doughWeight * salt.value;
    var waterWeight = (doughWeight * water.value) - halfStarter;

    var flourOneWeight = autolyseWeight * flourOne.value;
    var flourTwoWeight = autolyseWeight * flourTwo.value;
    var flourDifference = autolyseWeight;

    // place results on table
    autolyse_r.textContent = autolyseWeight.toFixed(2) + "g";
    starter_r.textContent = starterWeight.toFixed(2) + "g";
    salt_r.textContent = saltWeight.toFixed(2) + "g";
    water_r.textContent = waterWeight.toFixed(2) + "g";
    dw.textContent = (autolyseWeight + starterWeight + saltWeight + waterWeight).toFixed(2) + "g";
    flourOne_r.textContent = flourOneWeight.toFixed(2) + "g"
    flourTwo_r.textContent = flourTwoWeight.toFixed(2) + "g"

    // Check if the flours are less or equal to autolyse
    if (flourOneWeight + flourTwoWeight > autolyseWeight){
        autolyse_r.classList.add("bg-danger", "text-white");
        /* flourOne_r.classList.add("bg-warning", "text-white");
        flourTwo_r.classList.add("bg-warning", "text-white"); */

    }
    else {
        autolyse_r.classList.remove("bg-danger", "text-white");
        /* flourOne_r.classList.remove("bg-warning", "text-white");
        flourTwo_r.classList.remove("bg-warning", "text-white"); */
    }

        
    flourDifference = flourDifference - (flourOneWeight + flourTwoWeight);
    autolyse_r.textContent = flourDifference + "g";


}
