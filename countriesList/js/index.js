[
"name1",
"Name2"
]


var countries = [
    {
        "country": "Afghanistan",
        "population": "35530081"
    },
    {
        "country": "Albania",
        "population": "2930187"
    },
    {
        "country": "Algeria",
        "population": "41318142"
    },
    {
        "country": "American Samoa",
        "population": "55641"
    },
    {
        "country": "Andorra",
        "population": "76965"
    },
    {
        "country": "Angola",
        "population": "29784193"
    },
    {
        "country": "Anguilla",
        "population": "14909"
    }
]

$(document).ready(function() {
    fillOptions();
});

const fillOptions = ()=>{
    countries.forEach((value,index)=>{
        $(".country-select").append(`<option data-country-index="${index}">${value.country}</option>`);
        $(".countries-list tbody").append(`<tr><td>${value.country}</td><td>${value.population}</td>`)
    })
}

$("#id-select").change(function(event) {
    $(".detail-country").empty();
    let selectedCountry = $("#id-select option:selected").data("country-index");
    let selectedObject = countries[selectedCountry];
    $(".country-name").text(selectedObject.country);
    $(".country-population").text(selectedObject.population);
});