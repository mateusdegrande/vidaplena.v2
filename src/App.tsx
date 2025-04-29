import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { About } from './pages/About';
import { Accessibility } from './pages/Accessibility';
import { ContactForm } from './components/ContactForm';
import { products } from './data/products';

function App() {
  // Aqui guardamos informações que podem mudar durante o uso da aplicação
  const [showContactForm, setShowContactForm] = useState(false);  // Controla se o formulário de contato está visível
  const [searchQuery, setSearchQuery] = useState('');  // Guarda o texto digitado na busca
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);  // Categoria selecionada
  const location = useLocation();  // Nos diz em qual página estamos
  
  // Filtra os produtos com base na busca e categoria selecionada
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Componente da página inicial
  const HomePage = () => (
    <>
      {/* Seção de produtos em destaque */}
      <section aria-labelledby="featured-heading">
        <h2 
          id="featured-heading" 
          className="text-3xl font-bold text-slate-900 dark:text-white mb-8"
        >
          {selectedCategory ? 
            `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 
            'Produtos em Destaque'}
        </h2>
        <ProductGrid products={filteredProducts} />
      </section>

      {/* Seção sobre acessibilidade */}
      <section className="mt-16 bg-rose-50 dark:bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Compromisso com Acessibilidade
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Nossa loja foi desenvolvida pensando no seu conforto e bem-estar. Oferecemos:
        </p>
        <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
          <li>• Modo de alto contraste e tema escuro</li>
          <li>• Tamanho de texto ajustável</li>
          <li>• Navegação simplificada</li>
          <li>• Compatibilidade com leitores de tela</li>
          <li>• Fontes claras e legíveis</li>
        </ul>
      </section>
    </>
  );

  // Só mostra o menu de navegação na página inicial
  const showNavigation = location.pathname === '/';

  return (
    // Provedor de configurações de acessibilidade que envolve toda a aplicação
    <AccessibilityProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Cabeçalho com busca e menu */}
        <Header 
          onSearch={setSearchQuery} 
          searchQuery={searchQuery}
        />
        
        {/* Menu de categorias (só aparece na página inicial) */}
        {showNavigation && (
          <Navigation 
            onCategorySelect={setSelectedCategory} 
            selectedCategory={selectedCategory}
          />
        )}
        
        {/* Área principal do conteúdo */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sistema de rotas que decide qual página mostrar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/acessibilidade" element={<Accessibility />} />
          </Routes>
        </main>

        {/* Rodapé com informações de contato */}
        <footer className="bg-slate-100 dark:bg-slate-800 mt-16 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Fale Conosco
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>Telefone: 0800-123-4567</li>
                  <li>Email: contato@vidaplena.com.br</li>
                  <li>Chat: Disponível 24/7</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Links Úteis
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/sobre" className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400">
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a href="/acessibilidade" className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400">
                      Política de Acessibilidade
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Atendimento ao Cliente
                </h3>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full h-12 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  aria-label="Iniciar chat ao vivo"
                >
                  Iniciar Chat
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Formulário de contato que aparece como uma janela flutuante */}
        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}
      </div>
    </AccessibilityProvider>
  );
}

export default App;