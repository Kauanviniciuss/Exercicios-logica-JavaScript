let numero1 = parseFloat(prompt("Digite o primeiro valor:"))
let numero2 = parseFloat(prompt("Digite o segundo valor:"))
let resultado = (numero1<numero2)? "O valor "+numero2+" é o maior" : (numero1==numero2)? "Não serão lidos valores iguais" : "O valor "+numero1+" é o maior"  
alert(resultado)