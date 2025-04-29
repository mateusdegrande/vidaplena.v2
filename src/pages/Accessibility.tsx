import React from 'react';

export function Accessibility() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
        Política de Acessibilidade
      </h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Na VidaPlena, nosso compromisso com a acessibilidade digital é fundamental. 
          Implementamos as seguintes práticas para garantir que todos possam utilizar 
          nossa plataforma com facilidade:
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">
          Recursos de Acessibilidade
        </h2>
        
        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Contraste e Cores:</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>• Modo escuro para redução do cansaço visual</li>
              <li>• Alto contraste para melhor legibilidade</li>
              <li>• Cores cuidadosamente selecionadas para daltônicos</li>
            </ul>
          </li>
          
          <li>
            <strong>Navegação e Interação:</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>• Suporte completo à navegação por teclado</li>
              <li>• Atalhos de teclado para funções principais</li>
              <li>• Botões e áreas clicáveis grandes</li>
            </ul>
          </li>
          
          <li>
            <strong>Texto e Leitura:</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>• Controle de tamanho da fonte</li>
              <li>• Textos claros e bem espaçados</li>
              <li>• Fontes otimizadas para leitura</li>
            </ul>
          </li>
          
          <li>
            <strong>Suporte a Tecnologias Assistivas:</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>• Compatibilidade com leitores de tela</li>
              <li>• Descrições em texto para todas as imagens</li>
              <li>• Estrutura semântica do conteúdo</li>
            </ul>
          </li>
        </ul>

        <p className="text-lg text-slate-700 dark:text-slate-300 mt-8">
          Estamos constantemente trabalhando para melhorar a acessibilidade do nosso site. 
          Se você encontrar alguma dificuldade ou tiver sugestões, por favor, entre em contato conosco.
        </p>
      </div>
    </div>
  );
}