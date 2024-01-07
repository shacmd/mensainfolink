import * as data from "../data.js";

let disabledFilters = [];


window.onload = function() {
    let language = localStorage.getItem("language");
    if(language === null) language = "german";

    let disabledFiltersData = localStorage.getItem("disabledFilters");
    if(disabledFiltersData !== null) disabledFilters = JSON.parse(disabledFiltersData);

    let filterMeatElement = document.getElementById(data.Tag.Meat);
    let filterVegetarianElement = document.getElementById(data.Tag.Vegetarian);
    let filterVeganElement = document.getElementById(data.Tag.Vegan);
    let filterMilkElement = document.getElementById(data.Tag.Milk);
    let filterWheatElement = document.getElementById(data.Tag.Wheat);
    let filterFishElement = document.getElementById(data.Tag.Fish);
    let filterResetElement = document.getElementById("reset");
    if(language === "german") {
        filterMeatElement.innerHTML = "Fleisch";
        filterVegetarianElement.innerHTML = "Vegetarisch";
        filterVeganElement.innerHTML = "Vegan";
        filterMilkElement.innerHTML = "Milch";
        filterWheatElement.innerHTML = "Weizen";
        filterFishElement.innerHTML = "Fisch";
        filterResetElement.innerHTML = "Filter zurücksetzen";
    } else {
        filterMeatElement.innerHTML = "Meat";
        filterVegetarianElement.innerHTML = "Vegetarian";
        filterVeganElement.innerHTML = "Vegan";
        filterMilkElement.innerHTML = "Milk Products";
        filterWheatElement.innerHTML = "Wheat";
        filterFishElement.innerHTML = "Fish";
        filterResetElement.innerHTML = "Reset filters";
    }
    initFilters();
    filterResetElement.addEventListener("click", function () {
       resetFilters();
    });
};

function initFilters() {
    const contentItems = document.querySelectorAll('.filter-btn');
    for(let item of contentItems) {
        let id = item.id;
        if(disabledFilters.includes(id)) {
            item.classList.add('disabled');
        }
        item.addEventListener("click", function () {
            if(disabledFilters.includes(id)) {
                enableFilter(id);
            } else {
                disableFilter(id);
            }
        });
    }
}

function disableFilter(filter) {
    let filterItem = document.getElementById(filter);
    filterItem.classList.add('disabled');

    disabledFilters.push(filter);
    localStorage.setItem("disabledFilters", JSON.stringify(disabledFilters));
}

function enableFilter(filter) {
    let filterItem = document.getElementById(filter);
    filterItem.classList.remove('disabled');

    disabledFilters = disabledFilters.filter(item => item !== filter);
    localStorage.setItem("disabledFilters", JSON.stringify(disabledFilters));
}

function resetFilters() {
    const contentItems = document.querySelectorAll('.filter-btn');
    contentItems.forEach(item => item.classList.remove('disabled'));

    disabledFilters = [];
    localStorage.setItem("disabledFilters", JSON.stringify(disabledFilters));
}
