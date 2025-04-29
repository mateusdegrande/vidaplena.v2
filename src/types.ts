// Tipos para produtos e carrinho
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'eletronicos' | 'roupas';
}

export interface CartItem extends Product {
  quantity: number;
}

// Configurações de acessibilidade
export interface AccessibilitySettings {
  fontSize: 'normal' | 'grande' | 'extra-grande';
  contrast: 'normal' | 'alto';
  darkMode: boolean;
  highContrast: boolean;
}

// Estado do carrinho
export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

// Dados do usuário
export interface UserData {
  name: string;
  email: string;
  password: string;
}

// Dados do formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}