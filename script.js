// Atividade 1
function calcularCustoDekW() {


    //Valores da Resolução
    const SalarioMinimo = parseFloat(prompt("Digite o valor do salário minimo(R$)"))
    const consumoDekW = parseFloat(prompt("Digite a quantidade de quilowatts consumidos"))
    
    //Entradas
    if (isNaN(SalarioMinimo) || SalarioMinimo <= 0) {
        alert("Coloque um valor valido")
        return
    }
    if (isNaN(consumoDekW) || consumoDekW <= 0) {
        alert("Coloque uma qunatidade de kW valida")
        return
    }

    // Calculo dos kW
    const ValorkW = SalarioMinimo / 7 / 100

    // Calculo do valor total a ser pago
    const valorTotal = ValorkW * consumoDekW

    //Calculo do desconto de 10%
    const valorcomdesconto = valorTotal * 0.90

     //Resultados
     alert(`Valor de cada Quilowatts(kW): R$ ${ValorkW.toFixed(2)}
  Valor Total a ser pago: R$ ${valorTotal.toFixed(2)}
  Valor com desconto de 10%: R$ ${valorcomdesconto.toFixed(2)}`)
}

 //Execução do cálculo
 calcularCustoDekW()

 //Atividade 2
 