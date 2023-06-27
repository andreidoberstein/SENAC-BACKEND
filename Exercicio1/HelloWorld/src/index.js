console.log("Hello WOrld");
function checaRenovacaoRG() {
    var anoAtual = Number(prompt("Digite o ano atual:"));
    var anoNascimento = Number(prompt("Digite o ano de nascimento"));
    var anoEmissao = Number(prompt("Digite o ano de emissão do documento"));
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
console.log(checaRenovacaoRG());
