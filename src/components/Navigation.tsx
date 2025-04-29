import React from 'react';

interface NavigationProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

export function Navigation({ onCategorySelect, selectedCategory }: NavigationProps) {
  const categories = [
    { id: 'eletronicos', name: 'Eletrônicos' },
    { id: 'roupas', name: 'Roupas e Acessórios' },
  ];

  return (
    <nav className="bg-slate-100 dark:bg-slate-800 py-4 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={`text-lg font-medium ${
                selectedCategory === null
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400'
              } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 rounded-lg px-4 py-2`}
              role="menuitem"
            >
              Todos
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategorySelect(category.id)}
                className={`text-lg font-medium ${
                  selectedCategory === category.id
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400'
                } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 rounded-lg px-4 py-2`}
                role="menuitem"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}