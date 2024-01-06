import * as data from "./data.js";

let currentShownMeals = data.foodOnMonday;
let currentDayMeals = data.foodOnMonday;
let preferredMealsList = [];

let language = "german";
let secondUser = true;

function startSecondUser(seconds) {
    toggleSecondUser(true);
    const timerInterval = setInterval(function() {
        let timerText = language === 'german' ? ' Sekunden verbleibend' : ' seconds remaining';
        document.getElementById('timer').textContent = seconds + timerText;
        seconds--;
        if (seconds < 0) {
            clearInterval(timerInterval);
            closePopup();
            toggleSecondUser(false);
        }
    }, 1000);
}

function toggleSecondUser(status) {
    secondUser = status;
    const secondUserElement = document.getElementById('secondUser');
    const separatorElement = document.querySelector('.separator');
    const headElement = document.getElementById('mainHead');
    const headPopupElement = document.getElementById('headPopup');
    const timeElement = document.getElementById('timer');
    const popupElement = document.getElementById('popup');
    timeElement.style.display = status ? "Flex" : "None";
    secondUserElement.hidden = !status;
    separatorElement.hidden = !status;
    headElement.style.maxWidth = status ? "50%" : "100%";
    headPopupElement.style.maxWidth = status ? "50%" : "100%";
    popupElement.style.maxWidth = status ? "50%" : "100%";
    updateDishes();
    onWindowResize();
}

function getLocalStorageData() {
    language = localStorage.getItem('language');
    document.getElementById("language").value = language;

    let preferredMealsListData = localStorage.getItem("preferredMeals");
    if(preferredMealsListData !== null) preferredMealsList = JSON.parse(preferredMealsListData);
}

window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    const contentElement = document.querySelector('.content');
    const headElement = document.getElementById('mainHead');

    const weekElement = document.querySelector('.week');
    const weekOverviewElement = document.getElementById('weekOverview');
    headElement.style.minWidth = `${weekElement.offsetWidth + weekOverviewElement.offsetWidth + 35}px`;

    const headHeight = headElement.offsetHeight;
    contentElement.style.marginTop = `${headHeight}px`;

    const completeRightElement = document.getElementById("mainOptions")
    if(headHeight > 100) {
        completeRightElement.style.marginLeft = "0px";
    } else {
        completeRightElement.style.marginLeft = "auto";
    }
}

window.onload = function() {
    //Standart Einstellungen
    toggleSecondUser(false);
    updateDishes();
    handleLanguageChange();
    startSecondUser(60)
    document.getElementById("btn_monday").style.border = "2px solid green";

    let languageSelect = document.getElementById("language");
    languageSelect.addEventListener("change", handleLanguageChange);

    document.getElementById("sorting").addEventListener("change", updateDishes);

    document.getElementById("back").addEventListener("click", closePopup);

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
    getLocalStorageData();
    let otherMeals = document.getElementById("otherMeals");
    let preferredMeals = document.getElementById("preferredMeals");
    let mealsToday = document.getElementById("mealsToday");
    let title_preferredMeals = document.getElementById("title_preferredMeals");
    let title_otherMeals = document.getElementById("title_otherMeals");

    otherMeals.innerHTML = '';
    mealsToday.innerHTML = '';
    preferredMeals.innerHTML = ''

    let sortBy = document.getElementById("sorting").selectedIndex;

    //Sortieren
    let currentShownMealsSorted = sortMeals(currentShownMeals, sortBy);
    let preferredMealsSorted = sortMeals(preferredMealsList, sortBy);

    let mealsOfTodayAndPreferred = currentShownMealsSorted.filter(value => preferredMealsSorted.includes(value));
    title_preferredMeals.hidden = mealsOfTodayAndPreferred.length === 0;


    //Entferne Gerichte die schon bei den lielings Gerichten drinne sind
    currentShownMealsSorted = currentShownMealsSorted.filter(item => !mealsOfTodayAndPreferred.includes(item));
    title_otherMeals.hidden = currentShownMealsSorted.length === 0;

    insertMealsToMenu(mealsOfTodayAndPreferred, preferredMeals);
    insertMealsToMenu(currentShownMealsSorted, otherMeals);
    if(secondUser) {
        insertMealsToMenu(currentDayMeals, mealsToday);
    }
}

function sortMeals(meals, sortBy) {
    let sortOrder = [];
    for (let id of meals) {
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
    return sortOrder;
}

function insertMealsToMenu(meals, menu) {
    for (let id of meals) {
        let foodItem = data.foodItems[id];
        let description = language === "german" ? foodItem.description_de : foodItem.description_en;
        let dishHtml = `
            <div id="${menu.id}_dish_${id}" class="dish">
                <div class="dish-head">
                    <img src="${foodItem.image}" alt="${foodItem.name_en}">
                    <div class="price" id="dish_price_${id}">${foodItem.price.toFixed(2).replace('.',',')}€</div>
                </div>
            </div>
        `;
        menu.insertAdjacentHTML('beforeend', dishHtml);
        let dishDescriptionHtml = `
            <div class="dish-description">
                ${description}
            </div>
        `;
        let currentDish = document.getElementById(menu.id + "_dish_" + id);
        if(language !== "only-pictures") {
            currentDish.innerHTML += dishDescriptionHtml;
        }
        currentDish.addEventListener('click', function () {
            localStorage.setItem("selectedFood", id);
            openPopup();
        });
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
        document.getElementById("title_mealsToday").innerText = "Heutige Gerichte";
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
        document.getElementById("title_mealsToday").innerText = "Today's dishes";
    }
    let popupIframe = document.getElementById("popupIframe");
    if(popupIframe !== null) {
        popupIframe.contentWindow.location.reload(true);
    }

    updateDishes();
    onWindowResize();
}

// Funktion zum Hinzufügen von Event-Listenern für die Week Buttons
function addWeekButtonClickListener(buttonId, foodData) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function() {
        currentShownMeals = foodData;
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

function openPopup() {
    let languageSelect = document.getElementById("language");
    let timeElement = document.getElementById("timer");
    let popupHeadRightElement = document.getElementById('popupHeadRight');
    popupHeadRightElement.appendChild(timeElement);
    popupHeadRightElement.appendChild(languageSelect);


    let popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `<iframe src="dishView/dishView.html" id="popupIframe"></iframe>`;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    updateDishes();
    let languageSelect = document.getElementById("language");
    let sortingElement = document.getElementById("sorting");
    let timeElement = document.getElementById("timer");
    let mainOptionsElement = document.getElementById('mainOptions');
    mainOptionsElement.appendChild(languageSelect);
    mainOptionsElement.insertBefore(timeElement, sortingElement);
    document.getElementById('popup').style.display = 'none';
}
