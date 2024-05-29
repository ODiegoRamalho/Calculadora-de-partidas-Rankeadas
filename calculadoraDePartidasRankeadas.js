parametro(300,3)
function parametro(vitoria, derrota){

    let saldoVitorias = vitoria - derrota
    if(vitoria<10){
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Ferro`)
    }else if (vitoria>=11 && vitoria<=20){
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Bronze`)
    }else if (vitoria>=21 && vitoria<=50){
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Prata`)
    }else if (vitoria>=51 && vitoria<=80){
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Ouro`)
    }else if (vitoria>=81 && vitoria<=90){
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Diamante`)
    }else{
        console.log(`O herói tem um saldo de ${saldoVitorias} está no nível Imortal`)
    }
}

//calculadoraDePartidasRankeadas.js