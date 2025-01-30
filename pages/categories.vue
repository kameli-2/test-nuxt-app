<script setup lang="ts">
const categories = await getCategories();
</script>

<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <CategoryListItem :id="String(category.id)" :name="category.name" />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
ul {
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 1rem;
}
</style>