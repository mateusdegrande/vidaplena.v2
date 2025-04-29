import React, { useState } from 'react';
import type { ContactFormData } from '../types';

export function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Mensagem Enviada!
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Obrigado! Um de nossos consultores entrará em contato em breve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Fale Conosco
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}