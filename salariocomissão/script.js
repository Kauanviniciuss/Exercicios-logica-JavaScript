let salarioFixo = parseFloat(prompt("Digite o seu salário fixo:"))
let valorVendas = parseFloat(prompt("Digite o valor das vendas"))
let comissao = (valorVendas <= 1500)? valorVendas * 0.03  : 1500 * 0.03 + (valorVendas - 1500) * 0.05
let salarioTotal = salarioFixo + comissao;
alert("O seu salário total é: R$ " + salarioTotal.toFixed(2));
