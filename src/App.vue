<script setup>
  import LogoIcon from '@/components/svgComponents/LogoIcon'
</script>

<template>
  <div class="app g-container">
    <logo-icon class="logo" />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  .app {
    padding-top: 160px;
  }
  .logo {
    margin: 0 auto;
    display: block;
  }
</style>
