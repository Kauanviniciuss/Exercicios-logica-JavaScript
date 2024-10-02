
    let horaComeço = parseInt(prompt("Digite a hora de início do jogo: "))
    let horaFim = parseInt(prompt("Digite a hora que terminou o jogo: "))
    let duracao = (horaFim >= horaComeço)? horaFim - horaComeço : (24 - horaComeço) + horaFim
    alert("A duração do jogo foi de " + duracao + " horas.")
    