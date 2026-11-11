import React from 'react';
import Card from '../components/Card';
import { coldData } from '../components/data';
export default function Cold() {
  return (
    <div className="card-grid">
      {coldData.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}