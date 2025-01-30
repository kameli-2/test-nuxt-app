<script setup lang="ts">
const route = useRoute();
const { category: id } = route.params;

if (typeof id !== 'string') throw createError({ statusCode: 404, statusMessage: 'Page not found.' });

const category = await getCategory(parseInt(id));

if (!category) throw createError({ statusCode: 404, statusMessage: 'Product not found.' });

const products = await getProducts(parseInt(id));
</script>

<template>
  <div>
    <h2>Category: {{ category.name }}</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
ul {
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: auto auto auto;
  gap: 1rem;
}

li {
  border-radius: 1rem;
  box-shadow: 1px 1px 5px #102;
  overflow: hidden;
}
</style>