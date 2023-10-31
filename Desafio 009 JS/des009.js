document.querySelector('div#resultado')

function formatarMoeda(real) {
    return 'R$' + real.toFixed(2).replace('.', ',');
} //Essa função vai converter os números para o formato "real".

function clicou() {
    var nome = prompt('Qual é o nome do funcionário?');
    var sal = parseFloat(prompt(`Qual é o salário de ${nome}?`));
    var por = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)

    var aum = por * sal / 100;
    var final = aum + sal;

    resultado.innerHTML = `<p>O salário atual era de ${formatarMoeda(sal)}.<br>
    Com o aumento de ${por}%, o salário vai aumentar ${formatarMoeda(aum)} no próximo mês.<br>
    E a partir daí, ${nome} vai passar a ganhar ${formatarMoeda(final)}</p><br>`
}