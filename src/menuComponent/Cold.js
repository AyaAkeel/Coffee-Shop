import Card from '../components/Card';

const coldData = [
  { 
    id: 1, 
    name: 'Strawberry Milkshake', 
    price: 4.5, 
    desc: 'Creamy milk blended with fresh strawberries and vanilla ice cream', 
    img: 'https://i.pinimg.com/originals/b0/8b/cd/b08bcd59eda17c811e105bc96eacd631.jpg?nii=t'
  },
  { 
    id: 2, 
    name: 'Blueberry Milkshake', 
    price: 4.5, 
    desc: 'Rich and smooth milkshake packed with real blueberry flavor', 
    img: 'https://i.pinimg.com/736x/5c/cf/b3/5ccfb349ecb55f4aab64f0a2ebba1a55.jpg' 
  },
  {
    id: 3,
    name: 'Raspberry Ice Drink',
    price: 4.0,
    desc: 'Refreshing iced beverage bursting with sweet and tangy raspberry flavor',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFndCGEB-YpxqnrKADTNOF-dX_QixTw69FBg&s'
  },
  {
    id: 4,
    name: 'Rainbow Sprinkle Milkshake',
    price: 5.0,
    desc: 'Fun and colorful milkshake topped with whipped cream and sprinkles',
    img: 'https://i.pinimg.com/236x/12/b9/a7/12b9a7ea296f26046992776e1e5e1cf0.jpg?nii=t'
  },
  {
    id: 5,
    name: 'Rainbow Smoothie',
    price: 5.0,
    desc: 'Healthy layered tropical smoothie made with fresh vibrant fruits',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2Lb9digJn9t8zfnQMM-k6q_Z-TT8h3S_Rw&s'
  },
  {
    id: 6,
    name: 'Iced Coffee',
    price: 3.5,
    desc: 'Chilled brewed coffee served over ice with a splash of milk',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hp78AcdHuOwelu-FinHoSnjaT-KbVDjybQ&s'
  },
  {
    id: 7,
    name: 'Caramel Frappe',
    price: 4.5,
    desc: 'Blended ice coffee drink topped with whipped cream and sweet caramel drizzle',
    img: 'https://img.freepik.com/free-photo/caramel-ring-milkshake-wooden-plate-marble-table_114579-24201.jpg'
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