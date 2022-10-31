const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const dolar = 5.30
const euro = 5.17
const bitCoin = 106465.44

const convertValue = () => {
    const inputReal = document.getElementById('Real-value').value
    const realTextValue = document.getElementById('real-text-value')
    const currencyTextValue = document.getElementById('currency-text-value')

    // realTextValue.innerHTML = inputReal
    // currencyTextValue.innerHTML = (inputReal / dolar)
    realTextValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReal)

    if (select.value === 'U$$ Dólar americano') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReal / dolar)
    }

    if (select.value === '€ Euro') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReal / euro)
    }

    if(select.value === '₿ Bitcoin'){
        currencyTextValue.innerHTML = ((inputReal / bitCoin).toFixed(6))
    }
}

const selectCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'U$$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/EUACoinIcon.svg'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/EuroCoinIcon.svg'
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/BitcoinIcon.svg'
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', selectCurrency)