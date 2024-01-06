import * as data from "./data.js";

let currentDayMeals = data.foodOnMonday;
let language;

function getLocalStorageData() {
    language = localStorage.getItem('language');
    document.getElementById("language").value = language;
}


window.onload = function() {
    //Standart Einstellungen
    getLocalStorageData();
    updateDishes();
    handleLanguageChange();
    document.getElementById("btn_monday").style.border = "2px solid green";

    document.getElementById("language").addEventListener("change", handleLanguageChange);
    document.getElementById("sorting").addEventListener("change", updateDishes);

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
function updateDishes() {
    let otherMeals = document.getElementById("otherMeals");
    let sortBy = document.getElementById("sorting").selectedIndex;
    otherMeals.innerHTML = '';

    //Sortieren
    let sortOrder = [];
    for (let id of currentDayMeals) {
        if(sortOrder.length === 0) {
            sortOrder.push(id);
        } else {
            let inserted = false;
            let foodItemCurrent = data.foodItems[id];

            for (let prevIndex = 0; prevIndex < sortOrder.length; prevIndex++) {
                let prevId = sortOrder[prevIndex];
                let foodItemPrev = data.foodItems[prevId];

                if (sortBy === 0) {
                    if (foodItemPrev.popularity <= foodItemCurrent.popularity) {
                        sortOrder.splice(prevIndex, 0, id);
                        inserted = true;
                        break;
                    }
                } else {
                    if (foodItemPrev.price >= foodItemCurrent.price) {
                        sortOrder.splice(prevIndex, 0, id);
                        inserted = true;
                        break;
                    }
                }
            }
            if(!inserted) {
                sortOrder.push(id);
            }
        }

    }

    for (let id of sortOrder) {
        let foodItem = data.foodItems[id];
        let description = language === "german" ? foodItem.description_de : foodItem.description_en;
        let dishHtml = `
            <div id="dish_${id}" class="dish">
                <div class="dish-head">
                    <img src="${foodItem.image}" alt="${foodItem.name_en}">
                    <div class="price" id="dish_price_${id}">${foodItem.price.toFixed(2).replace('.',',')}€</div>
                </div>
            </div>
        `;
        otherMeals.innerHTML += dishHtml;
        let dishDescriptionHtml = `
            <div class="dish-description">
                ${description}
            </div>
        `;
        if(language !== "only-pictures") {
            let dish = document.getElementById("dish_" + id);
            dish.innerHTML += dishDescriptionHtml;
        }

    }
}

function handleLanguageChange() {
    language = document.getElementById("language").value;
    localStorage.setItem('language', language);
    if(language === "german") {
        document.getElementById("btn_monday").innerText = "Mo";
        document.getElementById("btn_tuesday").innerText = "Di";
        document.getElementById("btn_wednesday").innerText = "Mi";
        document.getElementById("btn_thursday").innerText = "Do";
        document.getElementById("btn_friday").innerText = "Fr";
        document.getElementById("btn_saturday").innerText = "Sa";
        document.getElementById("btn_mondayNextWeek").innerText = "Mo";

        document.getElementById("weekOverview").innerText = "Wochenübersicht";
        document.getElementById("option_price").innerText = "Preis";
        document.getElementById("option_popularity").innerText = "Beliebtheit";
        document.getElementById("title_otherMeals").innerText = "Weitere Gerichte";
        document.getElementById("title_preferredMeals").innerText = "Vorschläge für dich";
    } else {
        document.getElementById("btn_monday").innerText = "Mon";
        document.getElementById("btn_tuesday").innerText = "Tue";
        document.getElementById("btn_wednesday").innerText = "Wed";
        document.getElementById("btn_thursday").innerText = "Thu";
        document.getElementById("btn_friday").innerText = "Fri";
        document.getElementById("btn_saturday").innerText = "Sat";
        document.getElementById("btn_mondayNextWeek").innerText = "Mon";

        document.getElementById("weekOverview").innerText = "Week overview";
        document.getElementById("option_price").innerText = "Price";
        document.getElementById("option_popularity").innerText = "Popularity";
        document.getElementById("title_otherMeals").innerText = "Other meals";
        document.getElementById("title_preferredMeals").innerText = "Suggestions for you";
    }
    updateDishes();
}

// Funktion zum Hinzufügen von Event-Listenern für die Week Buttons
function addWeekButtonClickListener(buttonId, foodData) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function() {
        currentDayMeals = foodData;
        updateDishes();

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
