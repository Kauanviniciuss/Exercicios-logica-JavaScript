var anos = parseInt (prompt("Digite sua idade expressa em anos: "))
var meses = parseInt (prompt("Digite a quantidade de meses que passou do seu ultimo aniversario "))
var dias = parseInt (prompt("Digite os dias desde seu ultimo mêsversario: "))
var total_anos = anos * 365
var total_meses = meses * 30
var resultado = total_anos + total_meses + dias
alert("Sua idade em dias são :"+(resultado))

// opção inline alert("Sua idade em dias são: "+(total_anos+total_meses+dias))