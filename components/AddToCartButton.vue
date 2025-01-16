<script setup lang="ts">
function addToCartHandler(product: Product) {
  console.log('gonna dd to cart');
  const minicart = document.querySelector('.minicart') as HTMLElement;
  if (minicart) minicart.style.display = 'block';
  setTimeout(() => minicart.style.display = '', 2000);
  addToCart(product);
}

const props = defineProps<{ product: Product }>();
const { product } = props;
</script>

<template>
  <button @click="() => addToCartHandler(product)">Add to Cart</button>
</template>
