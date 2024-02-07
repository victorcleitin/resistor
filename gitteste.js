let resistividade = 0.00172 // resistividade condutor do cobre é 0.0172 Ω.mm²/m 

let resistencia = 0
let comprimento = 1555
let areaTransversal = 2.5 // o valor minimo é 1 para nao dividir por 0

resistencia = (resistividade * comprimento) / areaTransversal

console.log("resistencia = "+ resistencia)