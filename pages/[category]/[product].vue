<script setup lang="ts">
const route = useRoute();
const { product: id } = route.params;

if (typeof id !== 'string') throw createError({ statusCode: 404, statusMessage: 'Product not found.' });

const product = await getProduct(parseInt(id));

if (!product) throw createError({ statusCode: 404, statusMessage: 'Product not found.' });
</script>

<template>
  <div>
    <div class="columns">
      <div class="column">
        <NuxtImg :src="product.images[0]" width="640" />
      </div>
      <div class="column">
        <h2>{{ product.title }}</h2>
        <small>{{ product.category.name }}</small>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}&nbsp;&euro;</p>
        <p>
          <AddToCartButton :product="product" />
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.columns {
  display: flex;
  gap: 1rem;
}

.column img {
  width: 100%;
  min-width: 50vw;
  border-radius: 1rem;
}

h2 {
  margin-top: 0;
}
</style>