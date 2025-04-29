import React from 'react';
import { Search, ShoppingCart, Sun, Moon, Heart, ZoomIn, ZoomOut, Contrast } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ onSearch, searchQuery }: HeaderProps) {
  const { settings, updateSettings, increaseFontSize, decreaseFontSize } = useAccessibility();
  const itemCount = useCartStore(state => state.itemCount);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-auto py-4 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Ir para página inicial"
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-600 dark:text-rose-400" aria-hidden="true" />
            <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">VidaPlena</span>
          </Link>

          <div className="flex-1 max-w-lg mx-4 md:mx-8 order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full h-12 pl-12 pr-4 text-lg border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                placeholder="Pesquisar produtos..."
                aria-label="Pesquisar produtos"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
            </div>
          </div>

          <nav className="flex items-center space-x-2 md:space-x-4 order-2 md:order-3">
            <div className="flex items-center space-x-2 mr-2">
              <button
                onClick={() => updateSettings({ darkMode: !settings.darkMode })}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label={settings.darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'}
                title={settings.darkMode ? 'Modo claro' : 'Modo escuro'}
              >
                {settings.darkMode ? (
                  <Sun className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
                ) : (
                  <Moon className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
                )}
              </button>

              <button
                onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label={settings.highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
                title={settings.highContrast ? 'Contraste normal' : 'Alto contraste'}
              >
                <Contrast className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
              </button>

              <button
                onClick={increaseFontSize}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Aumentar tamanho da fonte"
                title="Aumentar fonte"
              >
                <ZoomIn className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
              </button>

              <button
                onClick={decreaseFontSize}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Diminuir tamanho da fonte"
                title="Diminuir fonte"
              >
                <ZoomOut className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
              </button>
            </div>
            
            <Link
              to="/carrinho"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 relative"
              aria-label={`Carrinho de compras com ${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`}
              title="Carrinho"
            >
              <ShoppingCart className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}