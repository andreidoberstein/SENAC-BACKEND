function checkUpdateId(): boolean {
    const currentYear = Number(prompt("Digite o ano atual"))
    const birthYear = Number(prompt("Digite o ano de nascimento"));
    const issueYear = Number(prompt("Digite o ano de emissão do documento"));
 
    const age:number = currentYear - birthYear;
    const timeWallet:number = currentYear - issueYear;
 
    const cond1:boolean = age <= 20 && timeWallet >= 5;
    const cond2 = age > 20 && age <= 50 && timeWallet >= 10;
    const cond3 = age > 50 && timeWallet >= 15;
 
    return (cond1 || cond2 || cond3);
 }
 