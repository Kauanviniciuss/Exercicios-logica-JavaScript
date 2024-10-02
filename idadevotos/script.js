let anonascimento=parseInt(prompt("Digite o ano em que nasceu:"))
let anoatual=parseInt(prompt("Digite o ano atual:"))
let idade = anoatual - anonascimento
if (idade <16){
    alert("Não pode votar.")
} else if (idade <18) {
    alert("voto opicional")   
} else{
    alert("Voto obrigatorio.")
}

