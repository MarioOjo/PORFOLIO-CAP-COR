import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Saiyan Battle Armor',
    powerLevel: '9000+',
    description: 'Elite Saiyan combat gear with energy absorption technology',
    price: 299,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2395797406-0b1495743d04eddc3fd5.png',
  },
  {
    id: 2,
    title: 'Gravity Chamber',
    powerLevel: '50000+',
    description: 'Train under extreme gravity conditions up to 500x Earth gravity',
    price: 15999,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/43e28df86d-b72d92b389d88e498710.png',
  },
  {
    id: 3,
    title: 'Elite Scouter',
    powerLevel: '1M+',
    description: 'Advanced power level detection with combat analysis',
    price: 1299,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2d967b598f-8cc6444dbec152dabcfa.png',
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-saiyan font-bold text-gray-800 mb-12 text-center">
          Featured Battle Gear
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
