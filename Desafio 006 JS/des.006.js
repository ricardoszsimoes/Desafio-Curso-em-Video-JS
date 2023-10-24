querySelector("section#result", clicou);

function clicou(){
    var c = Number.parseFloat(window.prompt('Digite um temperatura em °C (Celsius)'));
    
    var k = c + 273.15;
    var f = (c * 9 / 5) + 32;

    titulo.innerHTML = (`A temperatura de ${c}°C, corresponde a...`);
    desc.innerHTML = (`${k}°K (Kelvin)<br>${f}°F (Fahrenheit)`);
}