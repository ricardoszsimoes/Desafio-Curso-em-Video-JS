function clicou() {
    var a = prompt('Qual é o valor de a?');
    var b = prompt('Qual o valor de b?');
    var c = prompt('Qual o valor de c?');

    var delta = (b * b) - 4 * (a * c); //Conta para descobrir o valor de Bhaskara

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>
    <p>A equação atual é <span id="form">${a}x² + ${b}x + ${c} = 0</span><br>
    O cálculo realizado será <span id="form">Δ = ${a}² - 4 . ${b} . ${c}</span><br>
    O valor calculado foi <span id="form">Δ = ${delta}<span><br></p>`
}