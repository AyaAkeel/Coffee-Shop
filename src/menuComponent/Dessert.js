import Card from '../components/Card';
const dessertData = [
    {
        id: 1,
        name: 'Fruit Cake',
        price: 5.5, 
        desc: 'Delicious sponge cake topped with fresh seasonal fruits and whipped cream',
        img: 'https://visitlondonlikealocal.co.uk/wp-content/uploads/2025/09/image.png'
    },
    {
        id: 2,
        name: 'Choco custard',
        price: 4.0,
        desc: 'Rich and creamy chocolate custard served chilled',
        img: 'https://pastrychefonline.com/wp-content/uploads/2015/01/hot-chocolate-with-marshmallows1-683x1024.jpg'
    },
     {
        id: 3,
        name: 'Donuts',
        price: 3.0,
        desc: 'Soft and fluffy glazed donuts with various sweet toppings',
        img: 'https://cakelinks.in/cdn/shop/files/ChatGPT_Image_May_4_2026_12_13_26_AM.png?v=1777833841'
    },
    {
        id: 4,
        name: 'French Finger Cinnamon Bon',
        price: 4.5,
        desc: 'Crispy pastry fingers filled with warm cinnamon and brown sugar',
        img: 'https://flouronmyfingers.com/wp-content/uploads/2025/04/French-Toast-Sticks.jpg'
    },
    {
        id: 5,
        name: 'Ice Cream',
        price: 3.5,
        desc: 'Scoops of creamy different tastes ice cream',
        img: 'https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ='
    },
    {
        id: 6,
        name: 'Macarons',
        price: 6.0,
        desc: 'Delicate and colorful French macarons with a smooth ganache filling',
        img: 'https://cdn.britannica.com/06/237806-050-1259D5A7/Colorful-stack-of-macaron-pastries-on-a-table.jpg'
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