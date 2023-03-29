// const row = document.querySelector('.row')
const select = document.querySelector('#continents');
const countriesDiv = document.querySelector('#countries');
const input = document.querySelector('.input')
const convert = document.querySelector('#convert')
const result = document.querySelector('.result')
const btn = document.querySelector('.btn')



btn.addEventListener('click', () => {
    let sum = input.value || 0
    let a = convert.value
    
    fetch(`https://api.exchangerate.host/latest?base=${a}&places=2&amount=${sum}&symbols=USD,EUR,KGS`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            result.innerHTML = ''
            
            if (data.base == 'USD') {
                result.innerHTML += `
                <h4>Base currency: ${data.base}</h4>
                <h6>EUR: ${data.rates.EUR}</h6>
                <h6>KGS: ${data.rates.KGS}</h6>
            `
            } else if (data.base == 'EUR') {
                result.innerHTML += `
                <h4>Base currency: ${data.base}</h4>
                <h6>KGS: ${data.rates.KGS}</h6>
                <h6>USD: ${data.rates.USD}</h6>
            `
            } else {
                result.innerHTML += `
                <h4>Base currency: ${data.base}</h4>
                <h6>USD: ${data.rates.USD}</h6>
                <h6>EUR: ${data.rates.EUR}</h6>
            `
            }
        })
})









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
                // console.log(country)
                // language=HTML
                countriesHTML += `
                    <div class="col-4 pt-3">
                        <div class="card">
                                <img src="${country.flags.png}" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${country.translations.cym.common}</h5>
                                    <p class="card-text">Capital: ${country.capital}</p>
                                    <p>Population: ${country.population}</p>
                                    <p>Area: ${country.area}</p>
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
