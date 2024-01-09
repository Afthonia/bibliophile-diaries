<template>
  <AccountCard>
    <h1 class="uppercase p-2 text-center text-4xl mb-16 font-extrabold text-bida-primary">
      ~ login ~
    </h1>
    <div class="flex flex-row items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-field-icon">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>

      <input v-model="emailValue" type="text" placeholder="Email" class="text-field"
        :class="{ 'border-2 border-red-700 shadow-sm shadow-red-700': emailEmpty }" />
    </div>
    <p class="text-sm cursor-pointer text-end text-bida-primary">Forgot your password?</p>
    <div class="flex flex-row items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-field-icon">
        <path fill-rule="evenodd"
          d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
          clip-rule="evenodd" />
      </svg>

      <input v-model="password" type="password" placeholder="Password" class="text-field"
        :class="{ 'border-2 border-red-700': passwordEmpty }" />
    </div>
    <button class="acnt-btn" @click="handleSubmit">
      Login
    </button>
    <p class="mt-4">
      Don't have an account?
      <RouterLink :to="{ name: 'signup' }"><span class="cursor-pointer underline text-bida-primary"> Create one! </span>
      </RouterLink>
    </p>
  </AccountCard>
</template>

<script setup>
import { ref } from "vue";
import AccountCard from "../components/AccountCard.vue";
// import { required, email } from '@vuelidate/validators';
// import { useVuelidate } from '@vuelidate/core';

const emailValue = ref('');
const password = ref('');

const emailEmpty = ref(null);
const passwordEmpty = ref(null);

// const rules = {
//   emailValue: { required, email },
//   password: { required }
// };

// const $v = useVuelidate(rules, { emailValue, password });

const handleSubmit = () => {
  emailEmpty.value = false
  passwordEmpty.value = false

  if (emailValue.value.length !== 0) {
    emailEmpty.value = true
  } else {
    emailEmpty.value = false
  }

  if (passwordEmpty.value.length !== 0) {
    passwordEmpty.value = true
  } else {
    passwordEmpty.value = false
  }
  // if ($v.$invalid) {
  //   return;
  // }
};
</script>
