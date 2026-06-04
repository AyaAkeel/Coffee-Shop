import Card from '../components/Card';
const hotData = [
    {
        id: 1,
        name: 'Flat White',
        price: 3.5,
        desc: 'Smooth espresso blended with a velvety layer of steamed microfoam milk',
        img: '../public/images/hot-drinks/flat white.jpg'
    },
    {
        id: 2,
        name: 'Frappe',
        price: 4.5,
        desc: 'Rich, frothed instant coffee served warm with a creamy texture',
        img: '../public/images/hot-drinks/fappe.jpg'
    },
    {
        id: 3,
        name: 'Galão',
        price: 4.5,
        desc: 'Traditional Portuguese hot drink consisting of espresso and three-quarters foamed milk',
        img: '../public/images/hot-drinks/Galao.jpg'
    },
    {
        id: 4,
        name: 'Irish Coffee',
        price: 4.5,
        desc: 'A warming blend of hot coffee, rich brown sugar, and a thick layer of fresh cream on top',
        img: '../public/images/hot-drinks/Irish coffee.jpg'
    },
    {
        id: 5,
        name: 'Mocha',
        price: 3.5,
        desc: 'A delicious combination of espresso, steamed milk, and rich chocolate syrup',
        img: '../public/images/hot-drinks/mocha.jpg'
    },
    {
        id: 6,
        name: 'Vienna Coffee',
        price: 4.5,
        desc: 'Strong espresso topped with a generous dollop of whipped cream instead of milk',
        img: '../public/images/hot-drinks/vienna.jpg'
    }
];
export default function Hot({ addToCart }) {
    return (
        <div className="card-grid">
            {hotData.map(item => (
                <Card key={item.id} item={item} addToCart={addToCart} />
            ))}
        </div>
    );
}