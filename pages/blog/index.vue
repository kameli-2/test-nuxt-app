<script setup lang="ts">
const posts = getPosts();
</script>

<template>
  <div>
    <h2>Blog</h2>
    <ul>
      <li v-for="post in posts">
        <NuxtLink :to="`/blog/${post.slug}`">
          <article>
            <h3>{{ post.title }}</h3>
            <small>{{ post.date.toLocaleDateString() }} by {{ post.author }}</small>
            <p>{{ post.ingress }}</p>
            <p>Read more &rarr;</p>
          </article>
        </NuxtLink>
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

li a {
  display: block;
  height: calc(100% - 1rem);
  box-shadow: 1px 1px 5px #102;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
}

li a:hover, li a:focus-visible {
  background-color: #efd;
}

</style>