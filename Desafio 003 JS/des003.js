function clicou(){
    var num = Number(window.prompt('Digite um número intereiro qualquer.'));

    var result1 = num - 1;
    var result2 = num + 1;

    window.alert(`Antes de ${num}, temos o número ${result1}.\nDepois de ${num}, temos o número ${result2}.`);
}