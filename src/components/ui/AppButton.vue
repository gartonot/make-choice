<script lang="ts" setup>
  import { computed, toRefs } from 'vue'

  interface IProps {
    label?: string
    href?: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    label: '',
    href: ''
  })
  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  const { label, href } = toRefs(props)
  const buttonIsLink = computed(() => href.value.length > 0)
</script>

<template>
  <a v-if="buttonIsLink" :href="href">
    <slot>
      {{ label }}
    </slot>
  </a>
  <button v-else class="button" @click="emit('click')">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .button {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 28px;
    gap: 10px;
    border: none;
    background: $primary-color;
    box-shadow: 0 3px 0 $primary-darken-color;
    border-radius: 8px;
    cursor: pointer;

    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.01em;
    color: $white-color;

    &:hover {
      filter: light(1);
    }
    &:active {
      transform: translateY(3px);
      box-shadow: none;
    }
  }
</style>
