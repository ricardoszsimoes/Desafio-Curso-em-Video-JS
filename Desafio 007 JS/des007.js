function formatarReal(real){
    return 'R$' + real.toFixed(2).replace('.', ',');
}
function formatarDolar(dolar){
    return '$' + dolar.toFixed(2).replace('.', ',');
}

var cota = parseFloat(prompt('Qual a cotação do dólar atualmente?'));

document.querySelector('div#result');

function clicou(){
    var din = parseFloat(prompt('Quantos R$ você tem na carteira?'));
    var res = din / cota;

    result.innerHTML = `<p>A cotação atual do dólar é de <strong>${formatarDolar(cota)}</strong> e você tem em sua carteira <strong>${formatarReal(din)}</strong>. </br> Após a conversão você terá <strong>${formatarDolar(res)}</strong>!</p>`
}