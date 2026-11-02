if (caixa >= 40000) {
    console.log(`Como o valor do caixa é R$ ${caixa} e o valor do carro é R$ ${carro}, é o suficiente para comprar o carro!`)
 } else {
    console.log(`Como o valor do caixa é R$ ${caixa} e o valor do carro é R$ ${carro}, não é o suficiente para comprar o carro!`)
 }

 if ((fabricante === "ford" || fabricante === "Ford") && (potênciadomotor === 1.8) && (cor === "azul" || cor === "Azul")) {
    console.log("Você atendeu todos os requisitos da compra!") 
 } else {
    console.log("Você não atendeu todos os requisitos da compra!")
 } 
 
 if (((caixa >= 40000) && (fabricante === "ford" || fabricante === "Ford") && (potênciadomotor === 1.8) && (cor === "azul" || cor === "Azul"))) {
     console.log("Parabéns! Você pode comprar o carro!")
 } else {
    console.log("Desculpe, mas você não pode comprar o carro.")
 }