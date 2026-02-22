var countries = [];
var beaches = [];
var temples = [];
const searchBtn = document.getElementById('searchbtn');
const clearbtn = document.getElementById('clearbtn');
fetch('./travel_recommendation_api.json')
    .then(res => { if (!res.ok) throw new Error("Network response was not ok"); return res.json(); })
    .then(data => {
        console.log(data)
        countries = data.countries;
        beaches = data.beaches;
        temples = data.temples;


        console.log("beaches: ", beaches);
    })
    .catch(err => {
        console.log(err);
        console.log("cant fetch travel data");
    })

function search() {
    const searchInput = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value = '';
    var detailsDiv = document.getElementById('details');
    let details = '';
    if (searchInput.toLowerCase() === 'beach' || searchInput.toLowerCase() === 'beaches') {
        for (const beach of beaches) {
            details += `
                <div class="card">
                    <img src="${beach.imageUrl}" alt="${beach.name}">
                    <h3>${beach.name}</h3>
                    <p>${beach.description}</p>
                </div>
            `;
        }

    }
    else if (searchInput.toLowerCase() === 'temple' || searchInput.toLowerCase() === 'temples') {
        for (const temple of temples) {
            details += `
                <div class="card">
                    <img src="${temple.imageUrl}" alt="${temple.name}">
                    <h3>${temple.name}</h3>
                    <p>${temple.description}</p>
                </div>
            `;
        }
    } else if (searchInput.toLowerCase() === 'country' || searchInput.toLowerCase() === 'countries') {
        for (const country of countries) {
            var cities = country.cities;
            for (const city of cities) {
                details += `
                <div class="card">
                    <img src="${city.imageUrl}" alt="${city.name}">
                    <h3>${city.name}</h3>
                    <p>${city.description}</p>
                </div>
            `;
            }

        }
    }
    detailsDiv.innerHTML = details;

}


function reset() {
    document.getElementById('details').innerHTML = '';
}

searchBtn.addEventListener('click', search);
clearbtn.addEventListener('click', reset)