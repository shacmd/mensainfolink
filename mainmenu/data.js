export const Tag = {
    Meat: "Meat",
    Vegan: "Vegan",
    Vegetarian: "Vegetarian",
    Fish: "Fish",
    Wheat: "Wheat",
    Milk: "Milk"
};

export const foodItems = [
    {
        name_de: 'Pizza Salami',
        name_en: 'Pizza',
        description_de: 'Klassische Pizza mit herzhafter Salami, Käse und Tomatensoße.',
        description_en: 'Classic pizza with savory salami, cheese, and tomato sauce.',
        ingredients_de: ['Weizenmehl', 'Tomaten', 'Käse', 'Salami'],
        ingredients_en: ['Wheat flour', 'Tomatoes', 'Cheese', 'Salami'],
        energy: 70,
        fat: 0.2,
        saturated_fatty_acids: 0.1,
        carbs: 14,
        sugar: 10.4,
        protein: 0.3,
        tags: [Tag.Meat],
        image: '../images/pizza.jpg',
        price: "5,50€",
    },
    {
        name_de: 'Gemüsepfanne',
        name_en: 'Vegetable Stir-Fry',
        description_de: 'Eine leckere Gemüsepfanne mit Brokkoli, Karotten, Paprika und Zucchini.',
        description_en: 'A delicious vegetable stir-fry with broccoli, carrots, bell pepper, and zucchini.',
        ingredients_de: ['Brokkoli', 'Karotten', 'Paprika', 'Zucchini'],
        ingredients_en: ['Broccoli', 'Carrots', 'Bell Pepper', 'Zucchini'],
        energy: 120,
        fat: 5.3,
        saturated_fatty_acids: 0.8,
        carbs: 15.6,
        sugar: 7.2,
        protein: 3.9,
        tags: [Tag.Vegetarian],
        image: '../images/gemuesepfanne-1.jpg',
        price: "3,50€",
    },
    {
        name_de: 'Tomatensalat mit Mozzarella',
        name_en: 'Tomato Salad with Mozzarella',
        description_de: 'Ein erfrischender Tomatensalat mit Mozzarella, Basilikum und Olivenöl.',
        description_en: 'A refreshing tomato salad with mozzarella, basil, and olive oil.',
        ingredients_de: ['Tomaten', 'Mozzarella', 'Basilikum', 'Olivenöl'],
        ingredients_en: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil'],
        energy: 180,
        fat: 14.2,
        saturated_fatty_acids: 4.3,
        carbs: 5.8,
        sugar: 3.5,
        protein: 8.1,
        tags: [Tag.Vegetarian],
        image: '../images/tomate-mozzarella-salat.jpg',
        price: "2,50€",
    },
    {
        name_de: 'Gegrillter Lachs',
        name_en: 'Grilled Salmon',
        description_de: 'Saftiges gegrilltes Lachsfilet mit Zitrone, Olivenöl und einer Prise Salz.',
        description_en: 'Juicy grilled salmon fillet with lemon, olive oil, and a pinch of salt.',
        ingredients_de: ['Lachsfilet', 'Zitrone', 'Olivenöl', 'Salz'],
        ingredients_en: ['Salmon Fillet', 'Lemon', 'Olive Oil', 'Salt'],
        energy: 250,
        fat: 15.7,
        saturated_fatty_acids: 2.3,
        carbs: 0.5,
        sugar: 0.2,
        protein: 25.8,
        tags: [Tag.Fish],
        image: '../images/lachs.jpeg',
        price: "5,00€",
    },
];
export const foodOnMonday = [0, 1, 2, 3];
export const foodOnTuesday = [0, 1, 2, 3];
export const foodOnWednesday = [0, 1, 2, 3];
export const foodOnThursday = [0, 1, 2, 3];
export const foodOnFriday = [0, 1, 2, 3];
export const foodOnSaturday = [0, 1, 2, 3];
export const foodOnMondayNextWeek = [0, 1, 2, 3];