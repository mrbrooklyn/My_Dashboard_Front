<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <p class="error-message">{{ t('not_found_message') }}</p>
      <NuxtLink to="/" class="back-button">{{ t('go_home_button') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

.error-content {
  max-width: 600px;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
}

.error-message {
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
}

.back-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #888;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #555;
}
</style>
