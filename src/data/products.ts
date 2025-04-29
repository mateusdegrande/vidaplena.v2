// Este arquivo contém a lista de produtos disponíveis na loja
import type { Product } from '../types';

// Lista de produtos disponíveis
export const products: Product[] = [
  // Seção de Eletrônicos
  {
    id: 'e1',  // Identificador único do produto
    name: 'Tablet de Fácil Uso',  // Nome do produto
    description: 'Tablet com interface simplificada e botões grandes, ideal para idosos',  // Descrição detalhada
    price: 899.90,  // Preço em reais
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800',  // Foto do produto
    category: 'eletronicos'  // Categoria do produto
  },
  {
    id: 'e2',
    name: 'Telefone com Teclas Grandes',
    description: 'Telefone celular com teclas amplas e display de alto contraste',
    price: 599.90,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800',
    category: 'eletronicos'
  },
  {
    id: 'e3',
    name: 'Relógio Digital Falante',
    description: 'Relógio que anuncia as horas em voz alta e clara',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800',
    category: 'eletronicos'
  },

  // Seção de Roupas e Acessórios
  {
    id: 'r2',
    name: 'Sapato Antiderrapante',
    description: 'Calçado com solado especial e fechamento em velcro',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800',
    category: 'roupas'
  },
  {
    id: 'r3',
    name: 'Casaco Térmico',
    description: 'Casaco leve e quente com fechamento fácil',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800',
    category: 'roupas'
  },
  {
    id: 'r4',
    name: 'Meias Antiderrapantes',
    description: 'Conjunto com 3 pares de meias com pontos de silicone',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800',
    category: 'roupas'
  }
];