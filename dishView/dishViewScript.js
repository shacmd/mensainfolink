import * as data from "../data.js";

window.onload = function() {
    let selectedFood = parseInt(localStorage.getItem("selectedFood"), 10);
    let language = localStorage.getItem("language");
    if(language === null) language = "german";
    if(isNaN(selectedFood)) selectedFood = 0;

    let foodItem = data.foodItems[selectedFood];
    const table = document.getElementById('foodInfo');
    if (language === "german") {
        addRow(table, "Nährwertangaben", "je Portion");
        addRow(table, "Energie", foodItem.energy + " kJ");
        addRow(table, "Fett", foodItem.fat + "g");
        addRow(table, "* davon gesättigte Fettsäuren", foodItem.saturated_fatty_acids + "g");
        addRow(table, "Kohlenhydrate", foodItem.carbs + "g");
        addRow(table, "* davon Zucker", foodItem.sugar + "g");
        addRow(table, "Eiweiß", foodItem.protein + "g");
    } else if (language === "english") {
        addRow(table, "Nutritional information", "per serving");
        addRow(table, "Energy", foodItem.energy + " kJ");
        addRow(table, "Fat", foodItem.fat + "g");
        addRow(table, "* of which saturated fatty acids", foodItem.saturated_fatty_acids + "g");
        addRow(table, "Carbohydrates", foodItem.carbs + "g");
        addRow(table, "* of which sugars", foodItem.sugar + "g");
        addRow(table, "Protein", foodItem.protein + "g");
    }

    let iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-symbols');
    if (foodItem.tags.includes(data.Tag.Meat)) {
        iconDiv.innerHTML += '<img src="/icons/meat.png" class="symbol" title="Contains meat" />';
    }
    if (foodItem.tags.includes(data.Tag.Vegan)) {
        iconDiv.innerHTML += '<img src="/icons/vegan.png" class="symbol" title="Vegan" />';
    }
    if (foodItem.tags.includes(data.Tag.Vegetarian)) {
        iconDiv.innerHTML += '<img src="/icons/vegetarian.png" class="symbol" title="Vegetarian" />';
    }
    if (foodItem.tags.includes(data.Tag.Milk)) {
        iconDiv.innerHTML += '<img src="/icons/milk.png" class="symbol" title="Contains milk" />';
    }
    if (foodItem.tags.includes(data.Tag.Wheat)) {
        iconDiv.innerHTML += '<img src="/icons/wheat.png" class="symbol" title="Contains wheat" />';
    }
    if(foodItem.tags.includes(data.Tag.Fish)){
        iconDiv.innerHTML+= '<img src="/icons/fish.png" class="symbol" title="Contain fish" />'
    }
    table.appendChild(iconDiv);
    

    let imageElement = document.getElementById("foodImage");
    imageElement.src = foodItem.image;

    let likeElement = document.getElementById("likeButton");
    likeElement.addEventListener("click", function () {
        let preferredMealsList = [];
        let preferredMealsListData = localStorage.getItem("preferredMeals");
        if(preferredMealsListData !== null) preferredMealsList = JSON.parse(preferredMealsListData);

        preferredMealsList.push(selectedFood);
        localStorage.setItem("preferredMeals", JSON.stringify(preferredMealsList));
        
        if(this.style.backgroundColor != "green"){
            this.style.backgroundColor = "green";
        }else{
            this.style.backgroundColor = "white";
        }
        let dislikeElement = document.getElementById("dislikeButton");
        if(dislikeElement.style.backgroundColor == "red") dislikeElement.style.backgroundColor = "white";
    });
    let dislikeElement = document.getElementById("dislikeButton");
    dislikeElement.addEventListener("click", function () {
        let preferredMealsList = [];
        let preferredMealsListData = localStorage.getItem("preferredMeals");
        if(preferredMealsListData !== null) preferredMealsList = JSON.parse(preferredMealsListData);

        preferredMealsList = preferredMealsList.filter(item => item !== selectedFood);
        localStorage.setItem("preferredMeals", JSON.stringify(preferredMealsList));

        if(this.style.backgroundColor != "red"){
            this.style.backgroundColor = "red";
        }else{
            this.style.backgroundColor = "white";
        }
        let likeElement = document.getElementById("likeButton");
        if(likeElement.style.backgroundColor == "green") likeElement.style.backgroundColor = "white";
    });
};

function addRow(table, key, value) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = key;
    cell2.textContent = value;
}
