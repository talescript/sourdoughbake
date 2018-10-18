// Get the form object
var form = document.forms["calculator"];

var autolyse = form.elements["autolyse"];
var starter = form.elements["starter"]
var salt = form.elements["salt"]
var water = form.elements["water"]

var autolyse_r = document.querySelector("#autolyse_r");
var starter_r = document.querySelector("#starter_r");
var salt_r = document.querySelector("#salt_r");
var water_r = document.querySelector("#water_r");
var dw = document.querySelector(".dw");

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
}

var btn = document.querySelector(".calculate");
btn.addEventListener("click", calculate);

function calculate(){
    var autolyseWeight = autolyse.value * 1;
    var starterWeight = autolyseWeight * starter.value;
    var halfStarter = starterWeight / 2
    var doughWeight = halfStarter + autolyseWeight;
    var saltWeight = doughWeight * salt.value;
    var waterWeight = (doughWeight * water.value) - halfStarter;

    autolyse_r.textContent = autolyseWeight.toFixed(2);
    starter_r.textContent = starterWeight.toFixed(2);
    salt_r.textContent = saltWeight.toFixed(2);
    water_r.textContent = waterWeight.toFixed(2);
    dw.textContent = doughWeight;
}