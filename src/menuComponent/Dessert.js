import Card from '../components/Card';
const dessertData = [
    {
        id: 1,
        name: 'Fruit Cake',
        price: 5.5, 
        desc: 'Delicious sponge cake topped with fresh seasonal fruits and whipped cream',
        img: 'src/images/desserts/Fruits Cake.jpg'
    },
    {
        id: 2,
        name: 'Choco Custard',
        price: 4.0,
        desc: 'Rich and creamy chocolate custard served chilled',
        img: 'src/images/desserts/choco castar.jpg'
    },
     {
        id: 3,
        name: 'Donuts',
        price: 3.0,
        desc: 'Soft and fluffy glazed donuts with various sweet toppings',
        img: 'src/images/desserts/Donats.jpg'
    },
    {
        id: 4,
        name: 'Finger Cinnamon Bon',
        price: 4.5,
        desc: 'Crispy pastry fingers filled with warm cinnamon and brown sugar',
        img: 'src/images/desserts/finger cinamonbon.jpg'
    },
    {
        id: 5,
        name: 'Ice Cream',
        price: 3.5,
        desc: 'Scoops of creamy vanilla and chocolate ice cream',
        img: 'src/images/desserts/Ice Cream.jpg'
    },
    {
        id: 6,
        name: 'Macarons',
        price: 6.0,
        desc: 'Delicate and colorful French macarons with a smooth ganache filling',
        img: 'src/images/desserts/macaron.jpg'
    }
];
export default function Dessert({ addToCart }) {
    return (
        <div className="card-grid">
            {dessertData.map(item => (
                <Card key={item.id} item={item} addToCart={addToCart} />
            ))}
        </div>
    );

}