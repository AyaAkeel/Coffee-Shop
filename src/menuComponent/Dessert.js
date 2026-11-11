import Card from '../components/Card';
import { dessertData } from '../components/data';


export default function Dessert() {
    return (
        <div className="card-grid">
            {dessertData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );

}