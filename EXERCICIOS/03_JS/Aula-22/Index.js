const INPUT_CAPITAL = document.querySelector('#Capital')
const INPUT_APORTE = document.querySelector('#Aporte')
const INPUT_MESES = document.querySelector('#Meses')
const LIST_INPUT_TAXA = document.querySelectorAll('input[name="taxa"]')
const RESULTADO = document.querySelector('#Resultado')

const TAXA_INPUT_PICPAY = document.querySelector('#TaxaPicPay')
const TAXA_INPUT_NUBANK = document.querySelector('#TaxaNubank')
const TAXA_INPUT_POPANCA = document.querySelector('#TaxaPoupanca')
const TAXA_INPUT_OUTRA = document.querySelector('#TaxaOutro')

const CDI = 0.005

TAXA_INPUT_PICPAY.addEventListener('click', () => {
    document.querySelector('#Picpay').checked = true
})
TAXA_INPUT_NUBANK.addEventListener('click', () => {
    document.querySelector('#Nubank').checked = true
})
TAXA_INPUT_POPANCA.addEventListener('click', () => {
    document.querySelector('#Poupanca').checked = true
})
TAXA_INPUT_OUTRA.addEventListener('click', () => {
    document.querySelector('#Outro').checked = true
})

TAXA_INPUT_PICPAY.addEventListener('change', () => {
    document.querySelector('#Picpay').value = TAXA_INPUT_PICPAY.value
})
TAXA_INPUT_NUBANK.addEventListener('change', () => {
    document.querySelector('#Nubank').value = TAXA_INPUT_NUBANK.value
})
TAXA_INPUT_POPANCA.addEventListener('change', () => {
    document.querySelector('#Poupanca').value = TAXA_INPUT_POPANCA.value
})
TAXA_INPUT_OUTRA.addEventListener('change', () => {
    document.querySelector('#Outro').value = TAXA_INPUT_OUTRA.value
})

function calcula() {

    const capital = Number(INPUT_CAPITAL.value)
    const aporte = Number(INPUT_APORTE.value)
    const meses = Number(INPUT_MESES.value)
    const taxa = taxaSelecionada()
    const resultado = formula(capital, aporte, taxa, meses)
    RESULTADO.hidden = false
    RESULTADO.querySelectorAll('span')[0].innerText = formataResultado(resultado);
}

function formula(capital, aporte, taxa, meses) {
    return (capital * ((taxa + 1) ** meses)) + ((aporte * ((((taxa + 1) ** meses) - 1))) / taxa);
}

function formataResultado(numero) {
    let result = (Math.round(numero * 100) / 100)
        if(isNaN(result)){
        result= 0
    }
    return result.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}


function taxaSelecionada() {
    for (let i = 0; i < LIST_INPUT_TAXA.length; i++) {
        let inputTaxa = LIST_INPUT_TAXA[i];
        if (inputTaxa.checked) {
            if (inputTaxa.id === 'Picpay' || inputTaxa.id === 'Nubank') {
                return Number(inputTaxa.value * CDI)
            }
            return Number(inputTaxa.value)
        }
    }
}