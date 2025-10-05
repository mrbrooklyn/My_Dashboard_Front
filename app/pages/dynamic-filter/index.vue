<template>
  <div class="header-page">
    <div class="header-content">
      <h1 class="header-code">Dymanic Filter</h1>
      <p class="header-message">{{ t('coming_soon') }}</p>
      <NuxtLink to="/" class="back-button">{{ t('go_home_button') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.header-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

.header-content {
  max-width: 600px;
}

.header-code {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.header-message {
  font-size: 1.5rem;
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
