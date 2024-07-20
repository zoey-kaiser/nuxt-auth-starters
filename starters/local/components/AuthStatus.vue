<script lang="ts" setup>
const { status, token, lastRefreshedAt, data } = useAuth()
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
  <DataViewer><span>Token:</span> {{ token ?? 'N/A' }}</DataViewer>
  <DataViewer><span>Session Data:</span> {{ data ?? 'N/A' }}</DataViewer>
</template>
