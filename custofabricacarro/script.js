var valorCarro = parseFloat(prompt("Digite o valor do carro: "))
var ValorFinal =  (valorCarro * 0.28) + (valorCarro * 0.45) + valorCarro
var valorFinalF = ValorFinal.toFixed(2)
alert("O valor final do seu carro é: "+valorFinalF)