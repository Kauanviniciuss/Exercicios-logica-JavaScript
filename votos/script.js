var total_eleitores = parseInt (prompt("Digite o total de eleitores: "))
var vt_brancos = parseInt (prompt("Digite o numeros de votos brancos: "))
var vt_nulos = parseInt (prompt("Digite o numeros de votos nulos: "))
var vt_validos = parseInt (prompt("Digite o numeros de votos validos: "))
var porcentagem_vt_branco = vt_brancos / total_eleitores * 100
var porcentagem_vt_nulos = vt_nulos / total_eleitores * 100
var porcentagem_vt_validos = vt_validos / total_eleitores * 100
alert("A porcentagem de votos " +vt_brancos + "é de: "+ porcentagem_vt_branco)
alert("A porcentagem de votos " +vt_nulos + "é de: "+porcentagem_vt_nulos)
alert("A porcentagem de votos " +vt_validos + "é de: "+porcentagem_vt_validos)