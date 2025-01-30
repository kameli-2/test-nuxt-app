<script setup lang="ts">
import type { BlogPost } from "~/lib/contentful/generated/blog_post";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
const route = useRoute();
const { slug } = route.params;

const { data } = await useFetch(`/api/blogPost?slug=${slug}`) as unknown as { data: { post: BlogPost } };
if (!data) throw createError({ statusCode: 404, statusMessage: 'Blog post not found.' });
</script>

<template>
  <div>
    <h2>{{ data.post.title }}</h2>
    <small>{{ new Date(data.post.date).toLocaleDateString() }} by {{ data.post.author }}</small>
    <p class="ingress">{{ data.post.ingress }}</p>
    <div v-html="documentToHtmlString(data.post.body)"></div>
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