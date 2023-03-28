const row = document.querySelector('.row')
const select = document.querySelector('#continents');
const countriesDiv = document.querySelector('#countries');
const input = document.querySelector('.input')
// const convert = document.querySelector('#convert')
const result = document.querySelector('.result')

select.addEventListener('change', () => {
    const region = select.value;
    // console.log(region)
    let url = 'https://restcountries.com/v3.1/';

    if (region !== 'all') {
        url += `region/${region}`;
    } else {
        url += 'all';
    }

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let countriesHTML = '';

            data.forEach((country) => {
                // language=HTML
                countriesHTML += `
                    <div class="col-4">
                        <div class="card">
                                <img src="${country.flags.png}" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${country.translations.cym.common}</h5>
                                    <p class="card-text">Capital: ${country.capital}</p>
                                    <p>Population: ${country.population}</p>
                                    <button class="btn btn-dark">
                                        <a href='${country.maps.googleMaps}' target="_blank">Show in map</a>
                                    </button>
                                </div>
                        </div>
                    </div>
                    
                    `;
            });

            countriesDiv.innerHTML = countriesHTML;
        })
});






input.addEventListener('input', (event) => {
    let sum = event.currentTarget.value
    // console.log(sum)
    fetch(`https://api.exchangerate.host/latest?base=kgs&amount=${sum}&symbols=USD,EUR`)
        .then(res => res.json())
        .then(data => {
            let a = data.rates
            console.log(a)
            result.innerHTML = `
                <h5>USD: ${a.USD}</h5>
                <h5>EUR: ${a.EUR}</h5>
            `
            console.log(data.rates)
        })
})


