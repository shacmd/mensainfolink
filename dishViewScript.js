window.onload = function() {
    const foodItems = [
        {
            Name: 'Pizza',
            Zutaten: ['Weizenmehl', 'Tomaten', 'Käse', 'Salami'],
            Energie: 70,
            Fett: 0.2,
            Gesättige_Fettsäuren: 0.1,
            Kohlenhydrate: 14,
            Zucker: 10.4,
            Eiweiß: 0.3,
            AllergenInfo: 'Nicht Glutenfrei, Nicht für Vegetarier geeignet',
            Tags: ['Enthält Fleisch'],
        },
    ];

    const table = document.getElementById('foodInfo');
    for (const item of foodItems) {
        for (const key in item) {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = key;
            cell2.textContent = item[key];
        }
        table.insertRow();
    }
};