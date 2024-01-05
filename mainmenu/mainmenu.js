import * as data from "./data.js";


window.onload = function() {
    //Standart Einstellungen
    updateDishes(data.foodOnMonday);
    document.getElementById("btn_monday").style.border = "2px solid green";

    // Event-Listener für jeden Button hinzufügen
    addWeekButtonClickListener("btn_monday", data.foodOnMonday);
    addWeekButtonClickListener("btn_tuesday", data.foodOnTuesday);
    addWeekButtonClickListener("btn_wednesday", data.foodOnWednesday);
    addWeekButtonClickListener("btn_thursday", data.foodOnThursday);
    addWeekButtonClickListener("btn_friday", data.foodOnFriday);
    addWeekButtonClickListener("btn_saturday", data.foodOnSaturday);
    addWeekButtonClickListener("btn_mondayNextWeek", data.foodOnMondayNextWeek);
};

// Funktion zum Aktualisieren der Gerichte
function updateDishes(listIDs) {
    let otherMeals = document.getElementById("otherMeals");
    otherMeals.innerHTML = '';

    for (let id of listIDs) {
        let foodItem = data.foodItems[id];
        let dishHtml = `
            <div id="dish_${id}" class="dish">
                <div class="dish-head">
                    <img src="${foodItem.image}" alt="${foodItem.name_en}">
                    <div class="price" id="dish_price_${id}">${foodItem.price.toFixed(2).replace('.',',')}€</div>
                </div>
                <div class="dish-description">
                    ${foodItem.description_de}
                </div>
            </div>
        `;
        otherMeals.innerHTML += dishHtml;
    }
}

// Funktion zum Hinzufügen von Event-Listenern für die Week Buttons
function addWeekButtonClickListener(buttonId, foodData) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function() {
        updateDishes(foodData);

        // Alle Buttons zurücksetzen
        resetWeekButtonBorders();

        // Aktuellen Button mit grünem Rahmen markieren
        this.style.border = "2px solid green";
    });
}

// Funktion zum Zurücksetzen der Rahmen aller Week Buttons
function resetWeekButtonBorders() {
    const buttonIds = ["btn_monday", "btn_tuesday", "btn_wednesday", "btn_thursday", "btn_friday", "btn_saturday", "btn_mondayNextWeek"];

    for (const buttonId of buttonIds) {
        const button = document.getElementById(buttonId);
        button.style.border = "2px solid black";
    }
}
