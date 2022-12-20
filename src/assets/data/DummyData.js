import lasagna from '../images/lasagna.jpg'
import cheeseburger from '../images/cheeseburger.jpg'
import kitfo from '../images/kitfo.jpg'
import pasta from '../images/pasta.jpg'
import salad from '../images/salad.jpg'


export const DummyData=[
    {
        id:'NF-CB-1',
        name:'Cheese Burger',
        category:'Non-Fasting',
        image:{cheeseburger},
        description:'Burger, Cheese, Tomato, Onions',
        price:50
    },
    {
        id:'NF-K-1',
        name:'Kitfo',
        category:'Non-Fasting',
        image:{kitfo},
        description:'Grined Meat, Butter, Kecho, Pepper',
        price: 50
    },
    {
        id:'F-S-1',
        name:'Salad',
        category:'Fasting',
        image:{salad},
        description:'Salad, Onions, Vinegar',
        price:30
    },
    {
        id:'F-P-1',
        name:'Pasta',
        category:'Fasting',
        image:{pasta},
        description:'Spaghetti, Tomato Sauce, Bread',
        price:30
    },
    {
        id:'NF-L-1',
        name:'Lazagna',
        category:'Non-Fasting',
        image:{lasagna},
        description:'Pasta, Cheese, Meat',
        price:55
    },
]