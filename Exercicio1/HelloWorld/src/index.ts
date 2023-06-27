console.log("Hello WOrld");

function checaRenovacaoRG(): boolean {
    const anoAtual:number = Number(prompt("Digite o ano atual:"));
    const anoNascimento:number = Number(prompt("Digite o ano de nascimento"));
    const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"));
 
    const idade:number = anoAtual - anoNascimento;
    const tempoCarteira:number = anoAtual - anoEmissao;
 
    const cond1:boolean = idade <= 20 && tempoCarteira >= 5;
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    const cond3:boolean = idade > 50 && tempoCarteira >= 15;
 
    return (cond1 || cond2 || cond3);
 }

 
 console.log(checaRenovacaoRG());