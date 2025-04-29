import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CartStore, Product, CartItem } from '../types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },
      
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId),
        }));
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter(item => item.id !== productId),
            };
          }

          return {
            items: state.items.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            ),
          };
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      get total() {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      get itemCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any) => {
        return {
          items: Array.isArray(persistedState.items) ? persistedState.items : [],
        };
      },
    }
  )
);