<script setup lang="ts">
import Minicart from './Minicart.vue';

</script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories">Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li class="minicart-container">
          <NuxtLink to="/cart">Cart</NuxtLink>
          <Minicart />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="css" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
li {
  flex-grow: 1;
}

a {
  display: inline-block;
  color: #efd;
  text-decoration: none;
  width: calc(100% - 1rem);
  text-align: center;
  padding: 0.5rem;
}
a:hover, a:focus-visible {
  background-color: #efd;
  color: #102;
}

.minicart-container {
  position: relative;
}

.minicart-container:hover .minicart,
.minicart-container a:focus-visible + .minicart {
  display: block;
}

.minicart {
  display: none;
}
</style>