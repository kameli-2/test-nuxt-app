<script setup lang="ts">
const cart = getCart();
</script>

<template>
  <div class="minicart">
    <h3>Cart</h3>
    <ul>
      <li v-for="cartItem in cart">
        <span class="cart-item-quantity">{{ cartItem.quantity }} &times;</span>
        <span class="cart-item-name">
          <NuxtLink :to="cartItem.productUrl">
            {{ cartItem.productTitle }}
          </NuxtLink>
        </span>
        <span class="cart-item-price">{{ Math.round(cartItem.unitPrice * cartItem.quantity * 100) / 100 }}&nbsp;&euro;</span>
        <span class="cart-item-delete">
          <button class="delete" @click="() => removeFromCart(cartItem.productId)">&times;</button>
        </span>
      </li>
    </ul>
    <div class="total" v-if="cart.length > 0">
      Total: {{ cart.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.unitPrice, 0) }}&nbsp;&euro;
    </div>
  </div>
</template>

<style lang="css" scoped>
.minicart {
  position: absolute;
  width: 320px;
  top: 100%;
  right: 0;
  box-shadow: 1px 1px 5px #102;
  background-color: #efd;
  color: #102;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
}

h3 {
  margin: 0.25rem;
}

ul {
  padding-left: 0;
  list-style: none;
}

li {
  border-top: 1px solid #102;
  padding-top: 0.25rem;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

li:last-child {
  border-bottom: 1px solid #102;
  padding-bottom: 0.25rem;
  margin-bottom: 0.25rem;
}

li span {
  padding: 0 0.25rem;
}

.cart-item-quantity {
  min-width: 2rem;
}

.cart-item-name {
  display: inline-block;
  text-overflow: ellipsis;
  overflow: clip;
  flex-grow: 1;
}

.cart-item-price {
  min-width: 3rem;
  text-align: right;
}

.cart-item-delete {
  min-width: 1rem;
}

.delete {
  border: none;
  background-color: transparent;
  color: #f00;
  font-size: 1.5rem;
  line-height: 1rem;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 3px;
}

.delete:hover,
.delete:focus-visible {
  background-color: #f00;
  color: #fff;
}

.total {
  text-align: right;
  padding: 0.5rem 1rem;
}
</style>