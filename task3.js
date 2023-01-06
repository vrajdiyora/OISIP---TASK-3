let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celltoFar(){
    let output = (parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function celltoKev(){
    let output = (parseFloat(celsius.value) + 273.15 );
    kelvin.value = parseFloat(output.toFixed(2));
}

function fartoCell(){
    let output = (parseFloat(fahrenheit.value) - 32 ) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
}

function fartoKev(){
    let output = (parseFloat(fahrenheit.value) + 459.67 ) * 5/9;
    kelvin.value = parseFloat(output.toFixed(2));
}

function kevtoCell(){
    let output = (parseFloat(kelvin.value) - 273.15 ) ;
    celsius.value = parseFloat(output.toFixed(2));
}

function kevtoFar(){
    let output = (((parseFloat(kelvin.value) - 273.15 ) * 9/5 ) + 32) ;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
