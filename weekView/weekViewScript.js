import * as data from "../data.js";

window.onload = function() {
    let language = localStorage.getItem("language");
    if(language === null) language = "german";

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekdaysGerman = { 'Monday': 'Montag', 'Tuesday': 'Dienstag', 'Wednesday': 'Mittwoch', 'Thursday': 'Donnerstag', 'Friday': 'Freitag' };

    const table = document.getElementById('weekly-menu');
    const tbody = table.querySelector('tbody');
    let row = document.createElement('tr');
    tbody.appendChild(row);

    // append the dishes for each day
    weekdays.forEach((day, index) => {


        let cell = document.createElement('td');
        row.appendChild(cell);

        for (let i = 0; i < data[`foodOn${day}`].length; i++) {
            let id = data[`foodOn${day}`][i];
            let dish = data.foodItems[id];

            if (dish) {
                // Erstelle eine div-Klasse mit dem Namen "dish" für jedes Bild-Link-Paar
                let dishDiv = document.createElement('div');
                dishDiv.classList.add('dish');

                let p = document.createElement('p');
                p.textContent = language === 'german' ? dish.name_de : dish.name_en;

                let img = document.createElement('img');
                img.src = dish.image;
                img.alt = p.textContent;
                dishDiv.appendChild(img);

                if(language !== "only-pictures") {
                    dishDiv.appendChild(p);
                } else {
                    img.style.border = "0px solid white";
                }
                // Füge die dish-Klasse zur Zelle hinzu
                cell.appendChild(dishDiv);

                dishDiv.addEventListener("click", function () {
                    localStorage.setItem("selectedFood", id);
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
