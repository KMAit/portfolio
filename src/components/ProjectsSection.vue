<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/index'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps<{
  projects: Project[]
}>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="projects section" id="projects" aria-labelledby="projects-title">
    <div class="container">

      <h2 id="projects-title" class="section__title reveal">Projets</h2>

      <ul class="projects__grid">
        <li
          v-for="project in projects"
          :key="project.id"
          class="reveal-item"
        >
          <ProjectCard :project="project" />
        </li>
      </ul>

    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

/* Cap at 2 columns — cards contain dense content, 3 would be too narrow */
@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
