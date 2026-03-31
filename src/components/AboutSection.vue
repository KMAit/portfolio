<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps<{
  text: string
}>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="about section" id="about" aria-labelledby="about-title">
    <div class="container">
      <h2 id="about-title" class="section__title reveal">À propos</h2>
      <p class="about__text reveal-item">{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.about__text {
  max-width: 72ch;
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
  margin-top: var(--spacing-md);
}

@media (min-width: 768px) {
  .about__text {
    font-size: var(--font-size-xl);
  }
}
</style>
