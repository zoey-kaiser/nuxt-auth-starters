<template>
  <div>
    <Banner
      title="Local demo"
      text="This is a demo of the sidebase/nuxt-auth local provider."
      :button="{ text: 'Read Docs', href: 'https://auth.sidebase.io/guide/local/quick-start' }"
    />
    <Navbar />
    <div class="container mx-auto px-3 sm:px-0 my-4 space-y-6">
      <slot />
    </div>
  </div>
</template>

<style>
body {
    @apply bg-gray-50;
}
</style>
