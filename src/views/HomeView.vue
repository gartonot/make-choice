<script lang="ts" setup>
  import AppCard from '@/components/ui/AppCard.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  import { computed } from 'vue'

  const buttonLabel = computed(() => 'Далее')

  const slideCard = (): void => {
    console.log('click next')
  }
</script>

<template>
  <div class="home">
    <div class="card-list">
      <app-card class="card-item">
        Бывает сложно сделать какой-то выбор и мучаешь себя, что покушать, что надеть, что
        посмотреть, проблема решена, просто сделай выбор
      </app-card>
      <app-card class="card-item">
        Выбери категорию и то, какой вопрос тебя заставляет долго думать, приложение само предложит
        интересные варианты для тебя!
      </app-card>
    </div>

    <app-button :label="buttonLabel" class="home__button" @click="slideCard()" />
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .card-list {
    margin-top: 52px;
    position: relative;
  }
  .card-item {
    &:last-child {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .home {
    &__button {
      margin-top: 24px;
      width: 100%;
      font-size: 20px;
      line-height: 24px;

      background: $secondary-color;
      box-shadow: 0 3px 0 $secondary-darken-color;
    }
  }
</style>
