let salarioFixo = parseFloat(prompt("Digite o seu salario fixo: "))     // let valida se ja existe a variavel
let carrosVendidos = parseInt(prompt("Digite quantos carros você vendeu: ")) 
let totalVendas = parseFloat(prompt("Digite o valor total das suas vendas: ")) 
let comissãoFixa = parseFloat(prompt("Digite a sua comissão fixa: ")) 

let valorComissao = comissaoFixa * carrosVendidos
let salarioFinal = salarioFixo * valorComissao + (totalVendas * 0.05) 
let salarioFinalF = salarioFinal.toFixed(2)
alert("o seu salario final é: "+salarioFinalF)