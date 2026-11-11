import Card from '../components/Card';
import { hotData } from '../components/data';


export default function Hot() {
    return (
        <div className="card-grid">
            {hotData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    );
}