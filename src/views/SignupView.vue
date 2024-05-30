<template>
  <AccountCard>
    <h1
      class="uppercase p-2 text-center text-4xl mb-16 font-extrabold text-bida-primary"
    >
      ~ sign up ~
    </h1>
    <div class="flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8 text-field-icon"
      >
        <path
          fill-rule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="text-field"
      />
    </div>
    <div class="flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8 text-field-icon"
      >
        <path
          d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
        />
      </svg>

      <input
        v-model="email"
        type="text"
        placeholder="Email"
        class="text-field"
      />
    </div>
    <div class="flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8 text-field-icon"
      >
        <path
          fill-rule="evenodd"
          d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="text-field"
      />
    </div>
    <div class="flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8 text-field-icon"
      >
        <path
          fill-rule="evenodd"
          d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        class="text-field"
      />
    </div>
    <button class="acnt-btn" @click="handleRegister">Create Account</button>
  </AccountCard>
</template>

<script setup>
import { ref } from "vue";
import AccountCard from "../components/AccountCard.vue";
import { register } from "../composables/user/auth";
import router from "../router";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isRegistered = ref(false);

const handleRegister = () => {
  isRegistered.value = register(username.value, email.value, password.value);
  if (isRegistered.value) {
    router.push("/");
    router.go(0);
  }
};
</script>

<style></style>
