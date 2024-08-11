<script lang="ts" setup>
const { status, getCsrfToken, lastRefreshedAt, data } = useAuth()
const csrfToken = await getCsrfToken()
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold">
      Authentication Overview
    </h1>
    <p class="font-light text-lg">
      See all available authentication & session information below.
    </p>
  </div>

  <DataViewer><span>Status:</span> {{ status }}</DataViewer>
  <DataViewer><span>Last refresh:</span> {{ lastRefreshedAt ?? 'N/A' }}</DataViewer>
  <DataViewer><span>CSRF Token:</span> {{ csrfToken ?? 'N/A' }}</DataViewer>
  <DataViewer><span>Session Data:</span> {{ data ?? 'N/A' }}</DataViewer>
</template>
