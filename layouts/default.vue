<template>
  <div>
    <Header />
    <div class="slot">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="css">
body {
  margin: 0;
  font-family: sans-serif;
}

.slot {
  padding: 1rem;
}
</style>