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
            let dish = data.foodItems[data[`foodOn${day}`][i]];

            if (dish) {
                // Erstelle eine div-Klasse mit dem Namen "dish" für jedes Bild-Link-Paar
                let dishDiv = document.createElement('div');
                dishDiv.classList.add('dish');

                let p = document.createElement('p');
                p.textContent = language === 'german' ? dish.name_de : dish.name_en;

                let img = document.createElement('img');
                img.src = dish.image;
                img.alt = p.textContent;

                // Füge img und link zur dish-Klasse hinzu
                dishDiv.appendChild(img);
                dishDiv.appendChild(p);

                // Füge die dish-Klasse zur Zelle hinzu
                cell.appendChild(dishDiv);
            }
        }
    });

    // Update the weekday labels
    for (let day in weekdaysGerman) {
        document.getElementById(`label-${day}`).textContent = language === 'german' ? weekdaysGerman[day] : day;
    }
}