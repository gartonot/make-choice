<script lang="ts" setup></script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(60, 60, 60, 0.15);
    background: $white-color;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.01em;
  }
</style>
