const row = document.querySelector('.row')
// const languages = document.querySelector('#lang') //.getElementsByTagName('option')
const lang = document.querySelector('#lang')


// console.log(lang.innerText)

//
// lang.addEventListener('change', (event) => {
//     let v = event.target.value
//     console.log(event)
//
//     if (v === 'ru') {
//         fetch('https://restcountries.com/v3.1/region/asia')
//             .then(response => response.json())
//             .then(data => {
//                 data.map(country => {
//                     // console.log(country)
//                     row.innerHTML += `
//                 <div class="col-4 cards">
//                     <div class="box">
//                         <div class="card">
//                             <img src="${country.flags.png}" alt="">
//                             <div class="card-body">
//                                 <h5 class="card-title">${country.translations.rus.common}</h5>
//                                 <p class="card-text">Capital: ${country.capital}</p>
//                                 <p>Population: ${country.population}</p>
//                                 <button class="btn btn-dark">
//                                     <a href='${country.maps.googleMaps}' target="_blank">Show in map</a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//                 })
//             })
//     } else {
//         fetch('https://restcountries.com/v3.1/region/asia')
//             .then(response => response.json())
//             .then(data => {
//                 data.map(country => {
//                     // console.log(country)
//                     row.innerHTML += `
//                 <div class="col-4 cards">
//                     <div class="box">
//                         <div class="card">
//                             <img src="${country.flags.png}" alt="">
//                             <div class="card-body">
//                                 <h5 class="card-title">${country.translations.cym.common}</h5>
//                                 <p class="card-text">Capital: ${country.capital}</p>
//                                 <p>Population: ${country.population}</p>
//                                 <button class="btn btn-dark">
//                                     <a href='${country.maps.googleMaps}' target="_blank">Show in map</a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//                 })
//
//             })
//     }
// })



const select = document.querySelector('#continents');
const countriesDiv = document.querySelector('#countries');

select.addEventListener('change', () => {
    const region = select.value;
    console.log(region)
    let url = 'https://restcountries.com/v3.1/';

    if (region !== 'all') {
        url += `region/${region}`;
    } else {
        url += 'all';
    }

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
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











// fetch('https://restcountries.com/v3.1/region/asia')
//     .then(response => response.json())
//     .then(data => {
//         data.map(country => {
//             // console.log(country)
//             row.innerHTML +=`
//                 <div class="col-4 cards">
//                     <div class="box">
//                         <div class="card">
//                             <img src="${country.flags.png}" alt="">
//                             <div class="card-body">
//                                 <h5 class="card-title">${country.translations.cym.common}</h5>
//                                 <p class="card-text">Capital: ${country.capital}</p>
//                                 <p>Population: ${country.population}</p>
//                                 <button class="btn btn-dark">
//                                     <a href='${country.maps.googleMaps}' target="_blank">Show in map</a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//         })
//
//     })

//

// window.addEventListener('load', () => { // Вешаем прослушку на событие load
//
//     const currency = { USD: 78, EUR: 85.60, RUB: 1 }; // Устанавливаем курс валют
//
//     const state = [ 0, 'USD', 'USD' ]; // Начальное состояние
//
//     const result = document.getElementsByClassName('convert_result')[0] // Получаем поле куда будем писать результат
//
//     document.getElementById('val')
//         .addEventListener('input', ({ target }) => listener(target.value, 0)) // Получаем элемент ввода данных и вешаем на него слушатель
//     document.getElementById('cur1')
//         .addEventListener('change', ({ target }) => listener(target.value, 1)) // Получаем первый селект и вешаем на него слушатель
//     document.getElementById('cur2')
//         .addEventListener('change', ({ target }) => listener(target.value, 2)) // Получаем второй селект и вешаем на него слушатель
//
//     const listener = (value, key) => { // Обработчик событий
//         state[key] = value; // Обновляем состояние
//         result.innerHTML = summ(...state) // Пишем результат
//     }
//
//     function summ(val, cur1, cur2) { // Делаем функцию
//         let z = 0;
//         if(cur1 === cur2){ // Если оба значения в селектах равны
//             return val; // То просто вписываем данные из поля ввода
//         } else {
//             if(cur1 != 'RUB'){ // Если не равны рублю, то
//                 z = val*currency[cur1]; // Переводим сумму в рубли
//                 return Math.ceil((z/currency[cur2])*100)/100; // Делим на курс и округляем до сотых
//             } else { // Если не равны
//                 return Math.ceil((val*currency[cur2])*100)/100; // Умножаем на курс и округляем до сотых
//             }
//         }
//     }
//
// })
//
//
//
//
//





