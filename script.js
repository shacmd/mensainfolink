window.onload = function() {
    const foodItems = [
        {
            Name: 'Pizza',
            Energy: 70,
            Fat: 0.2,
            UnsaturatedFat: 0.1,
            Carbohydrates: 14,
            Sugar: 10.4,
            Protein: 0.3,
            AllergenInfo: 'None'
        },
        {
            Name: 'Baguette',
            Energy: 50,
            Fat: 0.3,
            UnsaturatedFat: 0.1,
            Carbohydrates: 27,
            Sugar: 17.2,
            Protein: 1.2,
            AllergenInfo: 'Contains Gluten'
        }
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