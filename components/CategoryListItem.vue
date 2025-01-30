<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
});
</script>

<template>
  <NuxtLink :to="`/${props.id}`">
    {{ props.name }}
  </NuxtLink>
</template>

<style scoped>
a {
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

a:hover {
  background-color: #efd;
}
</style>