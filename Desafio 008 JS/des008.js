document.querySelector('div#resultado')

function formatarMoeda(real){
    return 'R$' + real.toFixed(2).replace('.', ',');
} //Essa função vai converter os números para o formato "real".

function clicou() {
    var item = prompt('Qual é o produto que você está comprando?');
    var valor = parseFloat(prompt(`Qual é o preço de ${item}?`));
    var porcen = 0.1;
    var desc = valor * porcen;
    var final = valor - desc;

    resultado.innerHTML = `<p><span id="estilo">Calculando o desconto de 10% para ${item}</span>.
    </br>O preço original era ${formatarMoeda(valor)}.
    </br>Você acaba de ganhar ${formatarMoeda(desc)} de desconto (-10%).
    </br>No fim, você vai pagar ${formatarMoeda(final)} no produto ${item}.</p>` 

}