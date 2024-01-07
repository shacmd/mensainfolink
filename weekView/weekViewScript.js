import * as data from "../data.js";

window.onload = function() {
    let language = localStorage.getItem("language");
    if(language === null) language = "german";

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekdaysGerman = { 'Monday': 'Montag', 'Tuesday': 'Dienstag', 'Wednesday': 'Mittwoch', 'Thursday': 'Donnerstag', 'Friday': 'Freitag' };

    weekdays.forEach((day) => {
        const table = document.getElementById(`foodOn${day}`);
        table.innerHTML = '';

        for (let i = 0; i < data[`foodOn${day}`].length; i++) {
            let row = document.createElement('tr');
            let cell = document.createElement('td');

            let dish = data.foodItems[data[`foodOn${day}`][i]];

            if (dish) {
                let link = document.createElement('a');
                link.href = 'dishView.html?id=' + data[`foodOn${day}`][i];
                link.textContent = language === 'german' ? dish.name_de : dish.name_en;

                let img = document.createElement('img');
                img.src = dish.image;
                img.alt = link.textContent;

                let weekdayName = document.createElement('span');
                weekdayName.textContent = language === 'german' ? weekdaysGerman[day] : day;

                cell.appendChild(weekdayName);
                cell.appendChild(img);
                cell.appendChild(link);
                row.appendChild(cell);
                table.appendChild(row);
            }
        }
    });
}