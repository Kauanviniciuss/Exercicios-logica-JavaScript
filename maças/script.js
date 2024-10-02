let maças = parseInt(prompt("Digite quantas maças irá comprar:"))
let maçaspreço = (maças<12)? (maças*1.30) : (maças*1.00) 
alert("O preço total das "+maças+" maçãs é: "+maçaspreço)