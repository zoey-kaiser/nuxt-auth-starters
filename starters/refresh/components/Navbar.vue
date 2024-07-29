<script lang="ts" setup>
const { status, signOut, data } = useAuth()
</script>

<template>
  <header class="border-b shadow-sm">
    <nav class="mx-auto flex container items-center justify-between py-4" aria-label="Global">
      <NuxtLink href="/" class="flex items-center gap-1 -m-1.5 p-1.5">
        <img class="h-9 w-auto" src="/lock.png" alt="">
        <span class="text-lg font-semibold">NuxtAuth</span>
      </NuxtLink>
      <div class="hidden lg:flex items-center lg:gap-x-7">
        <NuxtLink href="/public">
          Public Page
        </NuxtLink>
        <NuxtLink href="/secure">
          Secured Page
        </NuxtLink>
        <div class="border-l pl-7">
          <TheButton v-if="status === 'unauthenticated'" size="md" href="/auth/signin">
            Sign in
          </TheButton>
          <div v-else class="flex items-center gap-4">
            {{ data?.name }}
            <img :src="data?.avatar" class="h-8">
            <TheButton size="md" @click="() => signOut()">
              Sign out
            </TheButton>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
