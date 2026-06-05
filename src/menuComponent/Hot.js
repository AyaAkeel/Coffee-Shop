import Card from '../components/Card';
const hotData = [
    {
        id: 1,
        name: 'Flat White',
        price: 3.5,
        desc: 'Smooth espresso blended with a velvety layer of steamed microfoam milk',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/047/080/057/small/a-cup-of-cappuchino-photo.jpg'
    },
    {
        id: 2,
        name: 'Frappe',
        price: 4.5,
        desc: 'Rich, frothed instant coffee served warm with a creamy texture',
        img: 'https://t3.ftcdn.net/jpg/01/52/24/44/360_F_152244493_NCJBzPZNTQy3vkd1C4whClTRYin95EHJ.jpg'
    },
    {
        id: 3,
        name: 'Galão',
        price: 4.5,
        desc: 'Traditional Portuguese hot drink consisting of espresso and three-quarters foamed milk',
        img: 'https://www.luxcafeclub.com/cdn/shop/articles/Galao_Coffee_1100x.png?v=1710733362'
    },
    {
        id: 4,
        name: 'Irish Coffee',
        price: 4.5,
        desc: 'A warming blend of hot coffee, rich brown sugar, and a thick layer of fresh cream on top',
        img: 'https://cookscornercoffee.com/cdn/shop/files/irishpotatoeb.jpg?v=1771868060&width=1445'
    },
    {
        id: 5,
        name: 'Mocha',
        price: 3.5,
        desc: 'A delicious combination of espresso, steamed milk, and rich chocolate syrup',
        img: 'https://t4.ftcdn.net/jpg/06/85/03/65/360_F_685036582_QOdhu9QUVJQ2JdJJz9rhPbVLtPZ7KNNQ.jpg'
    },
    {
        id: 6,
        name: 'Vienna Coffee',
        price: 4.5,
        desc: 'Strong espresso topped with a generous dollop of whipped cream instead of milk',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbr80gfvbVa7WwtcP7xkejzMHRu1Xv6UMnuA&s'
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