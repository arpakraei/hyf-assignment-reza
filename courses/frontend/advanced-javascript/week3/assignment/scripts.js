// variables
const from = document.getElementById('from');
const to = document.getElementById('to');
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

function fillData(rates) {
  Object.entries(rates).forEach(([currency]) => {
    const op1 = document.createElement('option');
    op1.value = currency;
    op1.textContent = currency;

    const op2 = op1.cloneNode(true);

    from.appendChild(op1);
    to.appendChild(op2);
  });

  from.value = 'EUR';
  to.value = 'DKK';
}

function convert(rates) {
  const amount = Number(amountInput.value);

  
  if (!amount || amount <= 0) {
    resultElement.innerText = 'Please enter a valid amount';
    return;
  }

  const fromRate = rates[from.value];
  const toRate = rates[to.value];

  
  const rate = toRate / fromRate;
  const finalResult = amount * rate;

  resultElement.innerText = finalResult.toFixed(2);
  ratePerUnit.innerText = `1 ${from.value} = ${rate.toFixed(2)} ${to.value}`;
}

function swapCurrency() {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
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