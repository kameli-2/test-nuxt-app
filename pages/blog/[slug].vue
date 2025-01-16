<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const post = getPost(slug as string);

if (!post) throw createError({ statusCode: 404, statusMessage: 'Blog post not found.' });
</script>

<template>
  <div>
    <h2>{{ post.title }}</h2>
    <small>{{ post.date.toLocaleDateString() }} by {{ post.author }}</small>
    <p class="ingress">{{ post.ingress }}</p>
    <div v-html="post.body"></div>
  </div>
</template>

<style lang="css" scoped>
.ingress {
  font-style: italic;
  border-bottom: 1px solid #edf;
  padding-bottom: 1rem;
  font-size: 0.9rem;
}
</style>