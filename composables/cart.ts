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

export const useCartStore = defineStore('cart', {
  state: () => ({ cart: initCart(), miniCartElement: null as HTMLElement | null }),
  
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
