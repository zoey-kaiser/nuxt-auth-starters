<script lang="ts" setup>
const formData = ref({
  email: '',
  password: ''
})
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-10">
    <div class="sm:mx-auto sm:w-full sm:max-w-[480px]">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in
      </h2>
      <p class="text-center font-light leading-6">
        You can sign in using the email
        <span>
          jsmith@auth.com
        </span>
        and the password
        <span>
          hunter2
        </span>
      </p>
    </div>
    <div class="grid gap-4 md:grid-cols-2 md:gap-2">
      <div class="bg-white px-6 py-8 shadow sm:rounded-lg">
        <form class="space-y-6" action="#" method="POST">
          <div class="FormInput">
            <label for="email">
              Email:
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="jsmith@auth.com"
            >
          </div>

          <div class="FormInput">
            <label for="password">
              Password:
            </label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              placeholder="hunter2"
            >
          </div>

          <TheButton size="lg">
            Sign in
          </TheButton>
        </form>
      </div>
      <DataViewer
        title="FormData:"
        :actions="['fill', 'reset']"
        @fill="formData = { email: 'jsmith@auth.com', password: 'hunter2' }"
        @reset="formData = { email: '', password: '' }"
      >
        {{ formData }}
      </DataViewer>
    </div>
  </div>
</template>

<style scoped>
.FormInput label {
    @apply block mb-2 font-medium text-gray-900 dark:text-white;
}

.FormInput input {
    @apply bg-white border border-gray-300 text-gray-900 text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
}
</style>
