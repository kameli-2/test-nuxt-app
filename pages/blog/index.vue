<script setup lang="ts">
import BlogPostListItem from "~/components/BlogPostListItem.vue";
import type { BlogPost } from "~/lib/contentful/generated/blog_post";
const { data } = await useFetch('/api/blogPost') as unknown as { data: { posts: BlogPost[] } };
</script>

<template>
  <div>
    <h2>Blog</h2>
    <ul>
      <li v-for="post in data.posts" :key="post.slug">
        <BlogPostListItem :slug="post.slug" :title="post.title" :author="post.author" :date="post.date" :ingress="post.ingress" />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
ul {
  list-style: none;
  padding: 0;
  display: grid;
  justify-content: space-evenly;
  align-items: stretch;
  grid-template-columns: auto auto auto;
  gap: 1rem;
}
</style>