let nome = prompt("Digite seu nome:");


function lerNumero(mensagem) {
    let valor = Number(prompt(mensagem));


    while (isNaN(valor)) {
        alert("Valor inválido! Digite um número.");
        valor = Number(prompt(mensagem));
    }


    return valor;
}
let rendaMensal = lerNumero("Digite sua renda mensal:");


// validar a qtd de despesas
let quantidadeDespesas = Number(prompt("Digite a quantidade de despesas (1 a 5):"));


while (isNaN(quantidadeDespesas) || quantidadeDespesas < 1 || quantidadeDespesas > 5) {


    if (isNaN(quantidadeDespesas)) {
        alert("Valor inválido, digite um número.");
    }
    else if (quantidadeDespesas > 5) {
        alert("Você pode informar no máximo 5 despesas");
    }
    else {
        alert("Você precisa informar pelo menos 1 despesa.");
    }
    quantidadeDespesas = Number(prompt("Digite a quantidade de despesas (1 a 5):"));
}




let totalDespesas = 0;
for (let i = 1; i <= quantidadeDespesas; i++) {
    let despesa = lerNumero("Digite o valor da despesa " + i + ":");
    totalDespesas = totalDespesas + despesa;
}


let sobra = rendaMensal - totalDespesas;




let mensagem = "";


if (totalDespesas > rendaMensal) {
    mensagem = "Atenção: você gastou mais do que ganhou.";
} else {
    let percentualSobra = sobra / rendaMensal;


    if (percentualSobra >= 0.3) {
        mensagem = "Otimo: boa margem de sobra.";
    } else {
        mensagem = "Ok:dá para melhorar a sobra.";
    }
}


let resultado =
    "=====> RESUMO DO ORÇAMENTO \n" +
    "Nome: " + nome + "\n" +
    "Renda: R$ " + rendaMensal.toFixed(2) + "\n" +
    "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
    "Sobra: R$ " + sobra.toFixed(2) + "\n" +
    "Status: " + mensagem;


console.log(resultado);
alert(resultado);
