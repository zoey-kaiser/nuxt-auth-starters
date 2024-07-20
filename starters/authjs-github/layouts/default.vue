<template>
  <div>
    <Banner
      title="AuthJS with Github demo"
      text="This is a demo of the sidebase/nuxt-auth authjs provider."
      :button="{ text: 'Read Docs', href: 'https://auth.sidebase.io/guide/authjs/quick-start' }"
    />
    <Navbar />
    <div class="container mx-auto px-3 sm:max-w-7xl mb-4 mt-10 space-y-6">
      <slot />
    </div>
  </div>
</template>
