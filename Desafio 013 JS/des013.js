function clicou() {
    var aluno = prompt('Qual é o seu nome?');
    var nota1 = Number(prompt(`Primeira nota de ${aluno}:`));
    var nota2 = Number(prompt(`Segunda nota de ${aluno}:`));

    var media = (nota1 + nota2) / 2;

    res.innerHTML = `<h2>Analisando a situação de ${aluno}...</h2>`

    if (media >= 6) {
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong><br>
        Com média acima de 6,0 o aluno está <span id="apro">APROVADO</span>.</p>`
    } else if (media >= 3 && media < 6) {
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong><br>
        Com média entre 3,0 e 6,0 o aluno está em <span id="recu">RECUPERAÇÃO</span>.</p>`
    } else {
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong><br>
        Com média abaico de 3,0 o aluno está em <span id="repro">REPROVADO</span>.</p>`
    }
}