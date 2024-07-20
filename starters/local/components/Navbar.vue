<template>
  <header class="bg-white">
    <nav class="mx-auto flex container items-center justify-between py-4" aria-label="Global">
      <NuxtLink href="/" class="flex items-center gap-1 -m-1.5 p-1.5">
        <img class="h-9 w-auto" src="/lock.png" alt="">
        <span class="text-lg font-semibold">NuxtAuth</span>
      </NuxtLink>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink href="/auth/signin">
          Sign in
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
