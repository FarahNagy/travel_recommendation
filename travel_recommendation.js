var countries = [];
var beaches = [];
var temples = [];

fetch('./travel_recommendation_api.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        countries = data.countries;
        beaches = data.beaches;
        temples = data.temples;


        console.log("beaches: ", beaches);
    })

function search() {
    const searchInput = document.getElementById('searchInput').value;
    if(searchInput.toLowerCase() === 'beach' || searchInput.toLowerCase() === 'beaches'){
        
    }
}