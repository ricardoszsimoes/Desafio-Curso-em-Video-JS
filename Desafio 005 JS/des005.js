querySelector("section#result", clicou);

function clicou(){
    var metro = prompt('Digite uma distância em metros (m):');

    var km = metro / 1000; // km = Quilômetros
    var hm = metro / 100; // hm = Hectômetros
    var dam = metro / 10; // dam = Decâmetro
    var dm = metro * 10; // dm = Decímetros
    var cm = metro * 100; // cm = Centímetros
    var mm = metro * 1000; // mm = Milímetros

    titulo.innerHTML = (`A distância de ${metro} metros, corresponde a...`);
    detalhe.innerHTML = 
    (`${km} quilômetros (km)<br>
    ${hm} hectômetros (hm)<br>
    ${dam} decâmetros (dam)<br>
    ${dm} decímetros (dm)<br>
    ${cm} centímetros (cm)<br>
    ${mm} milímetros (mm)`);
}