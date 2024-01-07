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
                let link = document.createElement('a');
                link.href = 'dishView.html?id=' + data[`foodOn${day}`][i];
                link.textContent = language === 'german' ? dish.name_de : dish.name_en;

                let img = document.createElement('img');
                img.src = dish.image;
                img.alt = link.textContent;

                cell.appendChild(img);
                cell.appendChild(link);
            }
        }
    });

    // event listener to language switch
    document.getElementById('language').addEventListener('change', function() {
        let language = this.value;
        localStorage.setItem("language", language);

        // Update the weekday labels
        for (let day in weekdaysGerman) {
            document.getElementById(`label-${day}`).textContent = language === 'german' ? weekdaysGerman[day] : day;
        }
    });
}