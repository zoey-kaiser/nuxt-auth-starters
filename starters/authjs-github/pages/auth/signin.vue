<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})

const { signIn } = useAuth()

const route = useRoute()
const error = computed(() => {
  const routeError = route.query.error
  if (!routeError || routeError === 'undefined') {
    return undefined
  }
  return `Error: ${routeError}`
})

const formData = ref({
  email: '',
  password: ''
})

async function submit() {
  signIn('credentials', formData.value)
}
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-10">
    <div class="sm:mx-auto sm:w-full sm:max-w-[480px]">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in
      </h2>
      <p class="text-center font-light leading-6">
        You can sign in using the email jsmith@auth.com and the password hunter2.
      </p>
    </div>
    <div class="grid gap-4 md:grid-cols-2 md:gap-2">
      <div class="bg-white px-6 py-8 shadow-sm sm:rounded-lg border">
        <form class="space-y-6" action="#" method="POST" @submit="submit">
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

          <div class="flex items-center gap-2">
            <TheButton size="lg" @click="submit">
              Sign in
            </TheButton>

            <TheButton size="lg" @click="signIn('github')">
              Sign in with Github
            </TheButton>
          </div>

          <div v-if="error" class="bg-red-400 p-3 text-white rounded">
            {{ error }}
          </div>
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
