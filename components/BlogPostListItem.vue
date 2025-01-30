<script setup lang="ts">
import type { BlogPost } from '~/lib/contentful/generated';

const props = defineProps({
  slug: String,
  title: String,
  date: String,
  author: String,
  ingress: String,
}) as BlogPost;
</script>

<template>
  <NuxtLink :to="`/blog/${props.slug}`">
    <article>
      <h3>{{ props.title }}</h3>
      <small>{{ new Date(props.date).toLocaleDateString() }} by {{ props.author }}</small>
      <p>{{ props.ingress }}</p>
      <p>Read more &rarr;</p>
    </article>
  </NuxtLink>
</template>

<style scoped>
a {
  display: block;
  height: calc(100% - 1rem);
  box-shadow: 1px 1px 5px #102;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
}

a:hover, a:focus-visible {
  background-color: #efd;
}
</style>