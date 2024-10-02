var salario = parseFloat (prompt("Qual é o seu salário?")) //parseFloat é o modo de ler em numeros e reais
var reajuste = parseFloat (prompt("Qual é a porcentagem do seu reajuste?"))
var salarioFinal = (salario / 100 * reajuste) + salario //salario dividido por 100 porque porcentagem * reajuste
var salarioFinalF = salarioFinal.toFixed(2) // ele define o numero das casas decimais que vai mostrar, pra não ficar muitas
alert("o seu salario reajustado é: "+salarioFinalF)
