function clicou() {
    var produto = window.prompt('Que produto você está comprando?');
    var valor = window.prompt(`Quanto custa ${produto} que você está comprando?`);
    var pago = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`);

    var troco = pago - valor;

    window.alert(`Você comprou ${produto} que custou R$${valor},00.
Deu R$${pago},00 em dinheiro e vai receber R$${troco},00 de troco.
Volte sempre!`)
}