const buttonsChange = document.getElementsByClassName('button-change');
const buttonsGet = document.getElementsByClassName('button-get');
// const buttonsChangeActive = document.querySelector('.active-change'); 
// const buttonsGetActive = document.querySelector('.active-get');
const input = document.querySelectorAll('input')
const apidata = "https://api.exchangerate.host/latest";

const currentChangeRate = document.querySelector('.current-change-rate');
const currentGetRate = document.querySelector('.current-get-rate');

async function getCurrency() {
    const response = await fetch(apidata);
    const result = await response.json();
    const rates = result.rates;

    function clickOnChange() {
        for(let i = 0; i < buttonsChange.length; i++) {
            buttonsChange[i].addEventListener('click', function(event) {
                const buttonsChangeActive = document.querySelector('.active-change');
                const buttonsGetActive = document.querySelector('.active-get');
                buttonsChangeActive.classList.remove('active-change');
                event.target.classList.toggle('active-change');
                input[1].value = input[0].value * rates[buttonsGetActive.value] / rates[buttonsChangeActive.value]
            })
        }
    }
    clickOnChange();

    function clickOnGet() {
        for(let j = 0; j < buttonsGet.length; j++) {
            buttonsGet[j].addEventListener('click', function(event) {
                const buttonsChangeActive = document.querySelector('.active-change');
                const buttonsGetActive = document.querySelector('.active-get');
                buttonsGetActive.classList.remove('active-get');
                event.target.classList.toggle('active-get');
                input[0].value = input[1].value * rates[buttonsChangeActive.value] / rates[buttonsGetActive.value]
            })
        }
    }
    clickOnGet()
}
getCurrency()