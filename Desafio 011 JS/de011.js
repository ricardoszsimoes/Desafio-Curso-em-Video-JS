function clicou() {
    var ano = prompt('Qual é o ano que você quer verificar?')
    var res = document.querySelector('div#res');

    var div1 = 4;
    var div2 = 100;
    var div3 = 400;

    if ((ano % div1 === 0 && ano % div2 !== 0) || ano % div3 === 0) {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <span id="style1">É BISSEXTO.</span> ✅</p>`;
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <span id="style2">NÃO É BISSEXTO.</span> ❌</p>`;
    }
}


