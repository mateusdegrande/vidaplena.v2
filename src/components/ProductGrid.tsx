import React from 'react';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-rose-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up';
    notification.textContent = 'Produto adicionado ao carrinho!';
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-rose-500"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                R$ {product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center gap-2 min-w-[120px] h-11 px-6 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                aria-label={`Adicionar ${product.name} ao carrinho`}
              >
                <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}