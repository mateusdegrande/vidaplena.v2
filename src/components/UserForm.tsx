import React, { useState } from 'react';
import type { UserData } from '../types';

export function UserForm() {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Dados do formulário:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Criar Conta
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
          >
            Nome Completo
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
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}