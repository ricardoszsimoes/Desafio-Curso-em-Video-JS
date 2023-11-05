function formatarMoeda(real) {
    return 'R$' + real.toFixed(2).replace('.', ',');
}

function clicou() {
    var ante = parseFloat(prompt('Qual era o preço anterior do produto?'));
    var atual = parseFloat(prompt('Qual é o preço atual do produto?'));
    var res = document.querySelector('div#res');

    var val = ante - atual;
    var absVal = Math.abs(val); // Para pegar o valor absoluto de um número.
    var por = parseInt((ante - atual) / ante * 100);
    var absPor = Math.abs(por); // Para pegar o valor absoluto da porcentagem.
   
    if (ante > atual){
        var dife = 'mais barato'
        var dife2 = 'desceu'
        var por2 = 'baixo'
    } else if (ante < atual) {
        var dife = 'mais caro'
        var dife2 = 'subiu'
        var por2 = 'cima'
    } else {
        var dife = 'igual'
        var dife2 = 'continua'
        var por2 = 'mesma'
    }

    res.innerHTML = `<h2>Analisando os valores informados...</h2>
    <p>O produto custava ${formatarMoeda(ante)} e agora custa ${formatarMoeda(atual)}.<br>
    Hoje o produto está ${dife}.<br>
    O preço ${dife2} ${formatarMoeda(absVal)} em relação ao preço anterior.<br>
    Uma variação de ${absPor}% para ${por2}</p>`
}