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
    if (language === "german") {
        document.getElementById("meat").querySelector(".text-content").textContent = "Fleisch";
        document.getElementById("vegetarian").querySelector(".text-content").textContent = "Vegetarisch";
        document.getElementById("vegan").querySelector(".text-content").textContent = "Vegan";
        document.getElementById("milk").querySelector(".text-content").textContent = "Milch";
        document.getElementById("wheat").querySelector(".text-content").textContent = "Weizen";
        document.getElementById("fisch").querySelector(".text-content").textContent = "Fisch";
        filterResetElement.textContent = "Filter zurücksetzen";
    } else {
        document.getElementById("meat").querySelector(".text-content").textContent = "Meat";
        document.getElementById("vegetarian").querySelector(".text-content").textContent = "Vegetarian";
        document.getElementById("vegan").querySelector(".text-content").textContent = "Vegan";
        document.getElementById("milk").querySelector(".text-content").textContent = "Milk Products";
        document.getElementById("wheat").querySelector(".text-content").textContent = "Wheat";
        document.getElementById("fisch").querySelector(".text-content").textContent = "Fish";
        filterResetElement.textContent = "Reset filters";
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
