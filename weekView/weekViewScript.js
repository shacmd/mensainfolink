import * as data from "../data.js";

window.onload = function () {
    let language = localStorage.getItem("language");
    if (language === null) language = "german";

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekdaysGerman = { 'Monday': 'Montag', 'Tuesday': 'Dienstag', 'Wednesday': 'Mittwoch', 'Thursday': 'Donnerstag', 'Friday': 'Freitag' };

    const table = document.getElementById('weekly-menu');
    const tbody = table.querySelector('tbody');
    let row = document.createElement('tr');
    tbody.appendChild(row);

    weekdays.forEach((day, index) => {
        let cell = document.createElement('td');
        row.appendChild(cell);

        for (let i = 0; i < data[`foodOn${day}`].length; i++) {
            let dishId = data[`foodOn${day}`][i];
            let dish = data.foodItems[dishId];

            if (dish) {
                let dishDiv = document.createElement('div');
                dishDiv.classList.add('dish');

                let p = document.createElement('p');
                p.textContent = language === 'german' ? dish.name_de : dish.name_en;

                let img = document.createElement('img');
                img.src = dish.image;
                img.alt = p.textContent;
                dishDiv.appendChild(img);

                // New div for icon symbols
                let iconDiv = document.createElement('div');
                iconDiv.classList.add('icon-symbols');

                // Add icon symbols based on dish properties
                if (dish.tags.includes(data.Tag.Meat)) {
                    iconDiv.innerHTML += '<img src="/icons/meat.png" class="symbol" title="Contains meat" />';
                }
                if (dish.tags.includes(data.Tag.Vegan)) {
                    iconDiv.innerHTML += '<img src="/icons/vegan.png" class="symbol" title="Vegan" />';
                }
                if (dish.tags.includes(data.Tag.Vegetarian)) {
                    iconDiv.innerHTML += '<img src="/icons/vegetarian.png" class="symbol" title="Vegetarian" />';
                }
                if (dish.tags.includes(data.Tag.Milk)) {
                    iconDiv.innerHTML += '<img src="/icons/milk.png" class="symbol" title="Contains milk" />';
                }
                if (dish.tags.includes(data.Tag.Wheat)) {
                    iconDiv.innerHTML += '<img src="/icons/wheat.png" class="symbol" title="Contains wheat" />';
                }
                if(dish.tags.includes(data.Tag.Fish)){
                    iconDiv.innerHTML+= '<img src="/icons/fish.png" class="symbol" title="Contain fish" />'
                }

                dishDiv.appendChild(iconDiv);

                if (language !== "only-pictures") {
                    dishDiv.appendChild(p);
                } else {
                    img.style.border = "0px solid white";
                }

                cell.appendChild(dishDiv);

                dishDiv.addEventListener("click", function () {
                    localStorage.setItem("selectedFood", dish.name_en); 
                    var messageData = {
                        event: 'iframeMessage',
                        popup: "dish",
                        alreadyOpened: true,
                        backTo: "week",
                    };
                    sendMessageToParent(messageData);
                });
            }
        }
    });

    // Update the weekday labels
    for (let day in weekdaysGerman) {
        document.getElementById(`label-${day}`).textContent = language === 'german' ? weekdaysGerman[day] : day;
    }
}

function sendMessageToParent(message) {
    window.parent.postMessage(message, '*');
}
