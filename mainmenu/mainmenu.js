import * as data from "./data.js";

window.onload = function() {
    updateDishes(data.foodOnMonday);
};

function updateDishes(listIDs) {
    for(let id in listIDs) {
        let foodItem = data.foodItems.at(id);
        let dishHtml = `
        <div id="dish_${id}" class="dish">
            <div class="dish-head">
                <img src="${foodItem.image}" alt="${foodItem.name_en}">
                <div class="price" id="dish_price_${id}">${foodItem.price}</div>
            </div>
            <div class="dish-description">
                ${foodItem.description_de}
            </div>
        </div>
        `;
        let otherMeals = document.getElementById("otherMeals");
        otherMeals.innerHTML += dishHtml;
    }
}
