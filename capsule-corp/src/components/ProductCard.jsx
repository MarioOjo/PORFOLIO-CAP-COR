import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-saiyan-blue transition-all transform hover:-translate-y-2">
      <img
        className="h-64 w-full object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-bold text-gray-800">{product.title}</h4>
          <span className="bg-power-green text-black px-3 py-1 text-sm font-bold rounded-full">
            PL: {product.powerLevel}
          </span>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-saiyan-blue">${product.price.toLocaleString()}</span>
          <button className="bg-saiyan-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
