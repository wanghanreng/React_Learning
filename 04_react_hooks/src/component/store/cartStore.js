import { create } from 'zustand';  

const useCartStore = create((set) => ({  
  items: [],  
  addItem: (item) => set((state) => {  
    const existingItem = state.items.find(x => x.id === item.id);  
    if (existingItem) {  
      return {  
        items: state.items.map(x =>  
          x.id === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : x  
        )  
      };  
    }  
    return { items: [...state.items, { ...item, quantity: 1 }] };  
  }),  
  removeItem: (itemId) => set((state) => ({  
    items: state.items.filter((item) => item.id !== itemId)  
  })),  
  updateQuantity: (itemId, quantity) => set((state) => ({  
    items: state.items.map((item) =>   
      item.id === itemId ? { ...item, quantity } : item  
    )  
  })),  
  clearCart: () => set({ items: [] })
}));  

export default useCartStore;