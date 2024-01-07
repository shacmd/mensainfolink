export const Tag = {
    Meat: "meat",
    Vegan: "vegan",
    Vegetarian: "vegetarian",
    Fish: "fisch",
    Wheat: "wheat",
    Milk: "milk"
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
        tags: [Tag.Meat, Tag.Milk],
        image: '../images/pizza.jpg',
        price: 5.50,
        popularity: 100,
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
        price: 3.50,
        popularity: 30,
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
        tags: [Tag.Vegetarian, Tag.Milk],
        image: '../images/tomate-mozzarella-salat.jpg',
        price: 2.50,
        popularity: 20,
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
        price: 5.00,
        popularity: 50,
    },
    {
        name_de: 'Vegetarische Pasta',
        name_en: 'Vegetarian Pasta',
        description_de: 'Hausgemachte vegetarische Pasta mit frischem Gemüse und Basilikumpesto.',
        description_en: 'Homemade vegetarian pasta with fresh vegetables and basil pesto.',
        ingredients_de: ['Pasta', 'Tomaten', 'Zucchini', 'Basilikumpesto'],
        ingredients_en: ['Pasta', 'Tomatoes', 'Zucchini', 'Basil Pesto'],
        energy: 350,
        fat: 8.5,
        saturated_fatty_acids: 1.2,
        carbs: 55.2,
        sugar: 4.8,
        protein: 12.0,
        tags: [Tag.Vegetarian],
        image: '../images/vegetarian_pasta.jpg',
        price: 8.50,
        popularity: 30,
    },
    {
        name_de: 'Rindersteak mit Rosmarin',
        name_en: 'Beef Steak with Rosemary',
        description_de: 'Saftiges Rindersteak mit Rosmarin, Knoblauch und einem Hauch von Balsamico.',
        description_en: 'Juicy beef steak with rosemary, garlic, and a touch of balsamic.',
        ingredients_de: ['Rindersteak', 'Rosmarin', 'Knoblauch', 'Balsamico'],
        ingredients_en: ['Beef Steak', 'Rosemary', 'Garlic', 'Balsamic'],
        energy: 450,
        fat: 25.0,
        saturated_fatty_acids: 8.5,
        carbs: 2.0,
        sugar: 0.5,
        protein: 40.5,
        tags: [Tag.Meat],
        image: '../images/beef_steak.jpg',
        price: 12.00,
        popularity: 40,
    },
    {
        name_de: 'Caprese-Salat',
        name_en: 'Caprese Salad',
        description_de: 'Klassischer italienischer Caprese-Salat mit Tomaten, Mozzarella und frischem Basilikum.',
        description_en: 'Classic Italian Caprese salad with tomatoes, mozzarella, and fresh basil.',
        ingredients_de: ['Tomaten', 'Mozzarella', 'Basilikum', 'Olivenöl'],
        ingredients_en: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil'],
        energy: 180,
        fat: 14.2,
        saturated_fatty_acids: 4.3,
        carbs: 5.8,
        sugar: 3.5,
        protein: 8.1,
        tags: [Tag.Vegetarian, Tag.Milk],
        image: '../images/caprese_salad.jpg',
        price: 6.50,
        popularity: 25,
    },
    {
        name_de: 'Hühnchen-Curry',
        name_en: 'Chicken Curry',
        description_de: 'Würziges Hühnchen-Curry mit einer Mischung aus exotischen Gewürzen und Kokosmilch.',
        description_en: 'Spicy chicken curry with a blend of exotic spices and coconut milk.',
        ingredients_de: ['Hühnchen', 'Curry-Gewürzmischung', 'Kokosmilch', 'Gemüse'],
        ingredients_en: ['Chicken', 'Curry Spice Blend', 'Coconut Milk', 'Vegetables'],
        energy: 320,
        fat: 18.5,
        saturated_fatty_acids: 7.0,
        carbs: 15.0,
        sugar: 3.8,
        protein: 22.5,
        tags: [Tag.Meat],
        image: '../images/chicken_curry.jpg',
        price: 9.00,
        popularity: 35,
    },
    {
        name_de: 'Griechischer Salat',
        name_en: 'Greek Salad',
        description_de: 'Erfrischender griechischer Salat mit Gurken, Tomaten, Oliven und Feta-Käse.',
        description_en: 'Refreshing Greek salad with cucumbers, tomatoes, olives, and feta cheese.',
        ingredients_de: ['Gurken', 'Tomaten', 'Oliven', 'Feta-Käse'],
        ingredients_en: ['Cucumbers', 'Tomatoes', 'Olives', 'Feta Cheese'],
        energy: 200,
        fat: 15.0,
        saturated_fatty_acids: 6.5,
        carbs: 12.5,
        sugar: 4.0,
        protein: 8.8,
        tags: [Tag.Vegetarian, Tag.Milk],
        image: '../images/greek_salad.jpg',
        price: 7.50,
        popularity: 28,
    },
    {
        name_de: 'Penne all Arrabbiata',
        name_en: 'Penne all Arrabbiata',
        description_de: 'Penne-Nudeln mit einer würzigen Tomatensauce, Knoblauch und Chili.',
        description_en: 'Penne pasta with a spicy tomato sauce, garlic, and chili.',
        ingredients_de: ['Penne-Nudeln', 'Tomatensauce', 'Knoblauch', 'Chili'],
        ingredients_en: ['Penne Pasta', 'Tomato Sauce', 'Garlic', 'Chili'],
        energy: 280,
        fat: 8.0,
        saturated_fatty_acids: 1.5,
        carbs: 45.0,
        sugar: 6.0,
        protein: 9.5,
        tags: [Tag.Vegetarian],
        image: '../images/penne_arrabbiata.jpg',
        price: 8.00,
        popularity: 32,
    },
    {
        name_de: 'Thunfisch-Sushirolle',
        name_en: 'Tuna Sushi Roll',
        description_de: 'Frühlingsrolle mit Thunfisch, Avocado, Gurke und Reis, gewickelt in Seetang.',
        description_en: 'Spring roll with tuna, avocado, cucumber, and rice, wrapped in seaweed.',
        ingredients_de: ['Thunfisch', 'Avocado', 'Gurke', 'Reis', 'Seetang'],
        ingredients_en: ['Tuna', 'Avocado', 'Cucumber', 'Rice', 'Seaweed'],
        energy: 220,
        fat: 5.5,
        saturated_fatty_acids: 1.0,
        carbs: 38.0,
        sugar: 4.5,
        protein: 12.0,
        tags: [Tag.Fish],
        image: '../images/tuna_sushi_roll.jpg',
        price: 10.50,
        popularity: 38,
    },
    {
        name_de: 'Spinat-Ricotta-Lasagne',
        name_en: 'Spinach Ricotta Lasagna',
        description_de: 'Schichtweise Lasagne mit Spinat, Ricotta-Käse, Tomatensauce und Nudeln.',
        description_en: 'Layered lasagna with spinach, ricotta cheese, tomato sauce, and noodles.',
        ingredients_de: ['Spinat', 'Ricotta-Käse', 'Tomatensauce', 'Nudeln'],
        ingredients_en: ['Spinach', 'Ricotta Cheese', 'Tomato Sauce', 'Noodles'],
        energy: 350,
        fat: 18.0,
        saturated_fatty_acids: 7.5,
        carbs: 32.0,
        sugar: 8.0,
        protein: 15.5,
        tags: [Tag.Vegetarian],
        image: '../images/spinach_ricotta_lasagna.jpg',
        price: 9.50,
        popularity: 30,
    },
];
export const foodOnMonday = [0, 1, 2, 3, 11];
export const foodOnTuesday = [4, 8, 2, 5, 10];
export const foodOnWednesday = [1, 9, 3, 7, 5];
export const foodOnThursday = [6, 0, 4, 8, 2];
export const foodOnFriday = [3, 7, 1, 9, 4];
export const foodOnSaturday = [2, 5, 6, 0, 4];
export const foodOnMondayNextWeek = [8, 2, 7, 1, 10];
