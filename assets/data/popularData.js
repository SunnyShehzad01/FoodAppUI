const popularData = [
    {
        id: 1,
        image: require("../Images/pizza1.png"),
        title: 'Primavera Pizza',
        weight: '540 gram',
        rating: '5.0',
        price: 2.99,
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'Thin crust',
        deliveryTime: 30,
        ingredients: [
            {
                id: 1,
                name: 'ham',
                image: require('../Images/ham.png')
            },
            {
                id: 2,
                name: 'Garlic',
                image: require('../Images/garlic.png')
            },
            {
                id: 3,
                name: 'Tomato',
                image: require('../Images/tomato.png')
            },
            {
                id: 4,
                name: 'Cheese',
                image: require('../Images/cheese.png')
            }
        ]
    },
    {
        id: 2,
        image: require("../Images/pizza2.png"),
        title: 'Vegetarian Pizza',
        weight: '400 gram',
        rating: '4.7',
        price: 4.99,
        sizeName: 'Medium',
        sizeNumber: 10,
        crust: 'Thick crust',
        deliveryTime: 45,
        ingredients: [
            {
                id: 1,
                name: 'Cheese',
                image: require('../Images/cheese.png')
            },
            {
                id: 2,
                name: 'Garlic',
                image: require('../Images/garlic.png')
            }
        ]
    },
    {
        id: 3,
        image: require("../Images/pizza3.png"),
        title: 'Pepporoni Pizza',
        weight: '700 gram',
        rating: '4.9',
        price: 9.99,
        sizeName: 'Large',
        sizeNumber: 14,
        crust: 'Thick crust',
        deliveryTime: 50,
        ingredients: [
            {
                id: 1,
                name: 'Tomato',
                image: require('../Images/tomato.png')
            },
            {
                id: 2,
                name: 'Cheese',
                image: require('../Images/cheese.png')
            }
        ]
    }
]

export default popularData
