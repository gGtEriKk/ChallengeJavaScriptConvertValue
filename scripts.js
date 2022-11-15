const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const iene = 0.035

const convertValue = async () => {
    const inputReal = document.getElementById('Real-value').value
    const realTextValue = document.getElementById('real-text-value')
    const currencyTextValue = document.getElementById('currency-text-value')

    const apiData = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(apiData)

    const dolar = apiData.USDBRL.high
    const euro = apiData.EURBRL.high
    const bitCoin = apiData.BTCBRL.high
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

    if (select.value === '₿ Bitcoin') {
        currencyTextValue.innerHTML = ((inputReal / bitCoin).toFixed(6)/1000)
    }

    if (select.value === '￥ Iene japonês') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputReal / iene)
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

    if (select.value === '￥ Iene japonês') {
        currencyName.innerHTML = 'Iene japonês'
        currencyImg.src = './assets/JpnIconCoin.png'
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', selectCurrency)