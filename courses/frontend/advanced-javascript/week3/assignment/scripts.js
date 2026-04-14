// variables
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('change-but');
const resultElement = document.getElementById('result');
const swapButton = document.querySelector('.swap-btn');
const ratePerUnit = document.getElementById('rate-perUint');

function getDataFromSource() {
  return fetch('https://open.er-api.com/v6/latest/USD')
    .then((res) => res.json())
    .then((data) => data.rates);
}

/* function fillData(rates) {
  Object.entries(rates).forEach(([currency]) => {
    const op1 = document.createElement('option');
    op1.value = currency;
    op1.textContent = currency;

    const op2 = op1.cloneNode(true);

    fromCurrency.appendChild(op1);
    toCurrency.appendChild(op2);
  });
  fromCurrency.value = 'EUR';
  toCurrency.value = 'DKK';
  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];
  //const rate = toRate / fromRate;
  const perUnitMessage = getRatePerUnit(fromRate, toRate);
  ratePerUnit.innerText = perUnitMessage;

} */


function fillData(rates) {
  const fromOptions = Object.keys(rates).map((currency) =>
    new Option(currency, currency)
  );
  fromCurrency.append(...fromOptions);
  toCurrency.append(...fromOptions.map(option => option.cloneNode(true)));

  fromCurrency.value = 'EUR';
  toCurrency.value = 'DKK';
  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];
  //const rate = toRate / fromRate;
  const perUnitMessage = getRatePerUnit(fromRate, toRate);
  ratePerUnit.innerText = perUnitMessage;

}

function convert(rates) {
  const amount = Number(amountInput.value);


  if (!amount || amount <= 0) {
    resultElement.innerText = 'Please enter an amount greater than 0';
    return;
  }

  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];
  const rate = toRate / fromRate;
  const finalResult = amount * rate;
  const perUnitMessage = getRatePerUnit(fromRate, toRate);

  ratePerUnit.innerText = perUnitMessage;
  resultElement.innerText = finalResult.toFixed(2);

}

function swapCurrency() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}

//get rate per unit
function getRatePerUnit(fromRate, toRate) {
  const rate = toRate / fromRate;
  return `1 ${fromCurrency.value} = ${rate.toFixed(2)} ${toCurrency.value}`;
}

getDataFromSource()
  .then((rates) => {
    fillData(rates);
    convertButton.addEventListener('click', () => {
      convert(rates);
    });

    swapButton.addEventListener('click', () => {
      swapCurrency();
      convert(rates); // update immediately after swap
    });
  })
  .catch((error) => {
    resultElement.innerText = error.message;
  });