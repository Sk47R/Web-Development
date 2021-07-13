const search = document.querySelector('.btn-search');
const input = document.querySelector('.search-input');
const countries = document.querySelector('.countries');

search.addEventListener('click', function (e) {
  e.preventDefault();
  const country = input.value.toLowerCase();
  console.log(country);
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    html = `
    <div class="country">
    <div class="img">
    <img
    class="country__img"
    src="${data.flag}"
    />
    </div>
    <div class="country-data">
    <h3 class="country-name">${data.name}</h3>
    <h4 class="country-region">${data.region}</h4>
    <p class="country-datas"><span>Capital:</span>${data.capital}</p>
    <p class="country-datas"><span>Population:</span>${data.population} </p>
    <p class="country-datas"><span>Language:</span>${data.languages[0].name}</p>
    <p class="country-datas"><span>Currency:</span>${data.currencies[0].name}</p>
    <p class="country-datas"><span>LandArea:</span>${data.area} km&sup2;</p>
    </div>
    </div>
    `;

    countries.innerHTML = html;
    countries.style.opacity = 1;

    input.value = '';
  });
});
