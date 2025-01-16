<script setup lang="ts">
const categories = await getCategories();
</script>

<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories">
        <NuxtLink :to="`/${category.id}`">
          {{ category.name }}
        </NuxtLink>
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

li a {
  border-radius: 1rem;
  box-shadow: 1px 1px 5px #102;
  padding: 1rem;
  width: calc(100% - 2rem);
  display: inline-block;
  color: inherit;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
}

li a:hover {
  background-color: #efd;
}
</style>