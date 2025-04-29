// Este componente gerencia o carrinho de compras da loja
import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  // Obtém as funções e dados do carrinho do nosso gerenciador de estado
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();
  
  // Controla se a compra foi finalizada
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Função que simula a finalização da compra
  const handleCheckout = () => {
    setCheckoutComplete(true);  // Mostra mensagem de sucesso
    clearCart();  // Limpa o carrinho
    setTimeout(() => {
      setCheckoutComplete(false);  // Remove a mensagem após 5 segundos
    }, 5000);
  };

  // Mostra mensagem de sucesso após finalizar a compra
  if (checkoutComplete) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
          Compra Finalizada com Sucesso!
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Lembre-se: Este é um projeto de estudos e nenhuma compra real foi processada.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg"
        >
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  // Se não houver itens no carrinho, mostra mensagem
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Seu Carrinho
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Seu carrinho está vazio
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg"
        >
          Continuar Comprando
        </Link>
      </div>
    );
  }

  // Calcula o valor total dos itens no carrinho
  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Interface principal do carrinho
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Meu Carrinho ({items.length} {items.length === 1 ? 'item' : 'itens'})
      </h2>
      
      {/* Lista de produtos no carrinho */}
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            
            {/* Informações do produto */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Preço unitário: R$ {item.price.toFixed(2)}
              </p>
              <p className="text-rose-600 dark:text-rose-400 font-semibold">
                Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            
            {/* Controles de quantidade */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <span className="w-8 text-center text-slate-900 dark:text-white">
                {item.quantity}
              </span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
              
              {/* Botão para remover item */}
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-800 ml-2"
                aria-label="Remover item"
              >
                <Trash2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resumo do carrinho e botão de finalizar compra */}
      <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl text-slate-900 dark:text-white">Total do Carrinho:</span>
          <span className="text-2xl font-bold text-rose-600 dark:text-rose-400">
            R$ {cartTotal.toFixed(2)}
          </span>
        </div>
        <button
          className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}