import lacoste from '../assets/images/lacoste.jpg';
import gucci from '../assets/images/gucci.webp';
import tommy from '../assets/images/tommy.jpeg';
import rolex from '../assets/images/rolex.jpeg';

const productList =  [
    {
        id: 1,
        name: 'Rolex',
        price: '100',
        img: rolex,
        isSaled: true,    
    },
    {
        id: 2,
        name: 'Tommy Hilfiger',
        price: '200',
        img: tommy,
        isSaled: false,
    },
    {
        id: 3,
        name: 'Lacoste',
        price: '300',
        img: lacoste,
        isSaled: true,
    },
    {
        id: 4,
        name: 'Gucci',
        price: '400',
        img: gucci,
        isSaled: false,
    }
]

export default productList;