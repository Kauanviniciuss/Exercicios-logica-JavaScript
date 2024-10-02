let nota1 = parseFloat(prompt("Digite a sua primeira nota:"))
let nota2 = parseFloat(prompt("Digite a sua segunda nota:"))
let soma = (nota1+nota2) /2   //A média aritmética simples é só a soma das duas notas dividida por 2.
let resultado = (soma<6)? "Você foi reprovado :(" : "Você foi aprovado :)"
alert(resultado)