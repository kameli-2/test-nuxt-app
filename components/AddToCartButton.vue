<script setup lang="ts">
import { useCartStore } from '~/composables/cart';

const { addToCart } = useCartStore();
const { miniCartElement } = storeToRefs(useCartStore());

function addToCartHandler(product: Product) {
  if (miniCartElement.value) {
    miniCartElement.value.style.display = 'block';
    setTimeout(() => {
      if (miniCartElement.value) miniCartElement.value.style.display = '';
    }, 2000);
  }
  addToCart(product);
}

const props = defineProps<{ product: Product }>();
const { product } = props;
</script>

<template>
  <button @click="() => addToCartHandler(product)">Add to Cart</button>
</template>
