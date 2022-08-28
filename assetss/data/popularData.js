const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: 3.99, 
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients : [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png')
            },    {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png')
            },
        ]
    },
    
    {
        id: '2',
        image: require('../images/pizza1.png'),
        title: 'Vegetarian Pizza',
        weight: '450 gr',
        rating: '5.0',
        price: 5.99, 
        sizeName: 'Small',
        sizeNumber: 14,
        deliveryTime: 30,
        crust: 'Thin Crust',
        ingredients : [
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png')
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png')
        },
    ]
    },   {
        id: '3',
        image: require('../images/pizza1.png'),
        title: 'Pepperoni Pizza',
        weight: '700 gr',
        rating: '5.0',
        price: 9.99,
        sizeName: 'Large',
        sizeNumber: 18,
        crust : 'Thin Crust',
        deliveryTime: 20,
        ingredients: [
            {
                id: '1',
                name: 'tomato',
                image:require('../images/tomato.png')
            },
            {
                id: '2',
                name: 'cheese',
                image : require('../images/cheese.png')
            }
        ],
    },
]


export default popularData;