<script lang="ts" setup>
  import AppCard from '@/components/ui/AppCard.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  import { computed, reactive } from 'vue'

  const cardList = reactive([
    {
      id: 1,
      text: 'Бывает сложно сделать какой-то выбор и мучаешь себя, что покушать, что надеть, что посмотреть, проблема решена, просто сделай выбор',
      isShown: true
    },
    {
      id: 2,
      text: 'Выбери категорию и то, какой вопрос тебя заставляет долго думать, приложение само предложит интересные варианты для тебя!',
      isShown: false
    }
  ])

  const lastCardIsShown = computed(() => {
    const lastItem = cardList.length - 1
    return cardList[lastItem].isShown
  })
  const buttonLabel = computed(() => {
    return lastCardIsShown.value ? 'Старт' : 'Далее'
  })
  const buttonHref = computed(() => {
    return lastCardIsShown.value ? '/categories' : ''
  })

  const slideCard = (): void => {
    const lastItem = cardList.length - 1
    cardList[lastItem].isShown = true
  }
</script>

<template>
  <div class="home">
    <div class="card-list">
      <app-card
        v-for="card in cardList"
        :key="card.id"
        :class="['card-item', { 'card-shown': card.isShown }]"
      >
        {{ card.text }}
      </app-card>
    </div>

    <app-button :label="buttonLabel" :href="buttonHref" class="home__button" @click="slideCard()" />
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .card-list {
    margin-top: 52px;
    min-height: 200px;
    max-height: 200px;
    position: relative;
    overflow: hidden;
  }
  .card-item {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;

    &.card-shown {
      left: 0;
      opacity: 1;
      visibility: visible;
    }
  }

  .home {
    &__button {
      width: 100%;
      font-size: 20px;
      line-height: 24px;

      background: $secondary-color;
      box-shadow: 0 3px 0 $secondary-darken-color;
    }
  }
</style>
