export type CartItem = {
  productId: number
  productTitle: string
  quantity: number
  unitPrice: number,
  productUrl: string,
}

export function initCart(): CartItem[] {
  return [];
}

const useCartStore = defineStore('cart', {
  state: () => ({ cart: initCart() }),
  
  getters: {
    cartItems: (state) => state.cart,
  },

  actions: {
    addToCart(product: Product) {
      const existingCartItem = this.cart.find(cartItem => cartItem.productId === product.id);

      if (existingCartItem) {
        existingCartItem.quantity++;
        return;
      }
    
      this.cart.push({
        productId: product.id,
        quantity: 1,
        unitPrice: product.price,
        productTitle: product.title,
        productUrl: `/${product.category.id}/${product.id}`,
      });
    },

    removeFromCart(id: number) {
      const deleteIndex = this.cart.findIndex(cartItem => cartItem.productId === id);
      this.cart.splice(deleteIndex, 1);
    }
  }
});

export const getCart = () => useCartStore().cartItems;
export const addToCart = (product: Product) => useCartStore().addToCart(product);
export const removeFromCart = (id: number) => useCartStore().removeFromCart(id);