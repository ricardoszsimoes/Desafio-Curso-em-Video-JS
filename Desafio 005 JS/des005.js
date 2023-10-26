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
    (`${km.toLocaleString('pt-BR')} quilômetros (km)<br>
    ${hm.toLocaleString('pt-BR')} hectômetros (hm)<br>
    ${dam.toLocaleString('pt-BR')} decâmetros (dam)<br>
    ${dm.toLocaleString('pt-BR')} decímetros (dm)<br>
    ${cm.toLocaleString('pt-BR')} centímetros (cm)<br>
    ${mm.toLocaleString('pt-BR')} milímetros (mm)`);
}