<template>
  <div class="bg-bida-fourth min-h-screen font-Aleo">
    <NavigationBar :authenticated="isLoggedIn" />
    <div class="min-h-screen">
      <RouterView />
    </div>
    <div class="flex flex-col justify-end">
      <Contact />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Contact from "./components/Contact.vue";
import { ref } from "vue";

const isLoggedIn = ref(false);

const user = JSON.parse(localStorage.getItem("user"));
isLoggedIn.value = user && user.token ? true : false;

console.log(isLoggedIn.value);
</script>
