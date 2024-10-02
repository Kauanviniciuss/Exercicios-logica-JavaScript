let horasTrabalhadas = parseInt(prompt("Digite o numero de horas trabalhadas no mes"))
let salarioHora = parseInt(prompt("Digite quanto você ganha por hora"))
let horasNormais = 160 //horas da jornada de trabalho do funcionario
let salarioTotal
if (horasTrabalhadas <= horasNormais) {  
    salarioTotal = horasTrabalhadas * salarioHora
} else {  
    let horasExtras = horasTrabalhadas - horasNormais
    let salarioNormal = horasNormais * salarioHora
    let valorHorasExtras = horasExtras * salarioHora * 1.5; // Hora extra com 50% a mais
    salarioTotal = salarioNormal + valorHorasExtras
}
alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2)); //toFixed para mostrar apenas 2 casas decimais
