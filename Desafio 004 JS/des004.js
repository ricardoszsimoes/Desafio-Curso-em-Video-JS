function formatarMoeda(real) {
    return 'R$' + real.toFixed(2).replace('.', ',');
}

function clicou() {
    var produto = window.prompt('Que produto você está comprando?');
    var valor = parseFloat(window.prompt(`Quanto custa ${produto} que você está comprando?`));
    var pago = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`));

    var troco = pago - valor;

    window.alert(`Você comprou ${produto} que custou ${formatarMoeda(valor)}.
Deu ${formatarMoeda(pago)} em dinheiro e vai receber ${formatarMoeda(troco)} de troco.
Volte sempre!`)
}