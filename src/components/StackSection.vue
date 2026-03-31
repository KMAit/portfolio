<script setup lang="ts">
import { ref } from 'vue'
import type { StackCategory } from '@/types/index'
import StackBadge from '@/components/ui/StackBadge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps<{
  categories: StackCategory[]
}>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="stack section" id="stack" aria-labelledby="stack-title">
    <div class="container">

      <h2 id="stack-title" class="section__title reveal">Stack technique</h2>

      <div class="stack__grid">
        <div
          v-for="category in categories"
          :key="category.name"
          class="stack__category reveal-item"
        >
          <h3 class="stack__category-title">{{ category.name }}</h3>
          <ul class="stack__badges" :aria-label="`Technologies ${category.name}`">
            <li v-for="item in category.items" :key="item">
              <StackBadge :label="item" />
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.stack {
  background-color: var(--color-surface);
}

/* ── Grid ─────────────────────────────────────────────────── */
.stack__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

/* ── Category card ────────────────────────────────────────── */
.stack__category {
  padding: var(--spacing-md);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-base);
}

.stack__category:hover {
  border-color: var(--color-primary);
}

.stack__category-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
}

/* ── Badges list ──────────────────────────────────────────── */
.stack__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

/* ── Responsive ───────────────────────────────────────────── */
@media (min-width: 768px) {
  .stack__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stack__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
