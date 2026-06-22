const display = document.getElementById("display");

function addValue(value) {
    document.getElementById("display").value +=value;
}

function clearInput(){
    document.getElementById("display").value ="";
}

function deleteone(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

function calculate(){
    let display = document.getElementById("display");
    display.value = eval(display.value); 
}