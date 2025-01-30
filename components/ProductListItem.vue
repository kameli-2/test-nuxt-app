<script setup lang="ts">
const props = defineProps<{ product: Product }>();
const { product } = props;
</script>

<template>
  <article>
    <NuxtImg v-if="product.images && product.images.length > 0" :src="product.images[0]" width="320" />
    <NuxtLink :to="`/${product.category.id}/${product.id}`">{{ product.title }}</NuxtLink>
    <div class="content">
      <span>
        {{ product.price }}&nbsp;&euro;
      </span>
      <span>
        <AddToCartButton :product="product" />
      </span>
    </div>
  </article>
</template>

<style scoped>
img {
  width: 100%;
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
}

.content {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
}
</style>