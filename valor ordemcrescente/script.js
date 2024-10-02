let valor1 = parseFloat(prompt("digite o primeiro valor:"))
let valor2 = parseFloat(prompt("digite o segundo valor:"))
resultado = (valor1<valor2)? "A ordem crescente é: "+valor1+" e "+valor2 : (valor1==valor2)? "Não serão lidos valores iguais" : "A ordem crescente é: "+valor2+" e "+valor1 
alert(resultado)