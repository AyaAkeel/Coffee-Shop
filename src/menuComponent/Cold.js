import React from 'react';
import Card from '../components/Card';

const coldData = [
  { 
    id: 1, 
    name: 'Strawberry Milkshake', 
    price: 4.5, 
    desc: 'Creamy milk blended with fresh strawberries and vanilla ice cream', 
    img: '../../public/images/cold-drinks/strawberrry milkshake.jpg'
  },
  { 
    id: 2, 
    name: 'Blueberry Milkshake', 
    price: 4.5, 
    desc: 'Rich and smooth milkshake packed with real blueberry flavor', 
    img: '../../public/images/cold-drinks/blueberry milkshake.jpg' 
  },
  {
    id: 3,
    name: 'Raspberry Ice Drink',
    price: 4.0,
    desc: 'Refreshing iced beverage bursting with sweet and tangy raspberry flavor',
    img: '../../public/images/cold-drinks/Rassberry Ice dink.jpg'
  },
  {
    id: 4,
    name: 'Rainbow Sprinkle Milkshake',
    price: 5.0,
    desc: 'Fun and colorful milkshake topped with whipped cream and sprinkles',
    img: '../../public/images/cold-drinks/Rainbow sprinkle.jpg'
  },
  {
    id: 5,
    name: 'Rainbow Smoothie',
    price: 5.0,
    desc: 'Healthy layered tropical smoothie made with fresh vibrant fruits',
    img: '../../public/images/cold-drinks/rainbow smoothe.jpg'
  },
  {
    id: 6,
    name: 'Iced Coffee',
    price: 3.5,
    desc: 'Chilled brewed coffee served over ice with a splash of milk',
    img: '../../public/images/cold-drinks/ice coffee.jpg'
  },
  {
    id: 7,
    name: 'Caramel Frappe',
    price: 4.5,
    desc: 'Blended ice coffee drink topped with whipped cream and sweet caramel drizzle',
    img: '../../public/images/cold-drinks/caramel frame.jpg'
  }
];

export default function Cold({ addToCart }) {
  return (
    <div className="card-grid">
      {coldData.map(item => (
        <Card key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}