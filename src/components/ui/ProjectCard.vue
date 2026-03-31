<script setup lang="ts">
import type { Project } from '@/types/index'
import StackBadge from '@/components/ui/StackBadge.vue'

defineProps<{
  project: Project
}>()

// BASE_URL prefix required for correct asset resolution on GitHub Pages (/portfolio/)
const base = import.meta.env.BASE_URL
</script>

<template>
  <article class="project-card">
    <div v-if="project.previewImage" class="project-card__preview">
      <img
        :src="`${base}${project.previewImage}`"
        :alt="`Aperçu du projet ${project.name}`"
        class="project-card__preview-img"
        loading="lazy"
      />
    </div>

    <header class="project-card__header">
      <h3 class="project-card__name">{{ project.name }}</h3>
      <span
        class="project-card__status"
        :class="project.status === 'in-progress' ? 'project-card__status--wip' : 'project-card__status--done'"
      >
        {{ project.status === 'in-progress' ? 'En développement' : 'Terminé' }}
      </span>
    </header>

    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__section">
      <h4 class="project-card__section-title">Choix techniques</h4>
      <p class="project-card__section-body">{{ project.technicalRationale }}</p>
    </div>

    <div class="project-card__section">
      <h4 class="project-card__section-title">Défi principal</h4>
      <p class="project-card__section-body">{{ project.mainChallenge }}</p>
    </div>

    <ul class="project-card__stack" aria-label="Stack technique">
      <li v-for="tech in project.stack" :key="tech">
        <StackBadge :label="tech" />
      </li>
    </ul>

    <footer class="project-card__footer">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card__link"
        :aria-label="`Voir le code source de ${project.name} sur GitHub`"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card__link project-card__link--demo"
        :aria-label="`Voir la démo de ${project.name}`"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Démo
      </a>
      <span v-if="!project.githubUrl && !project.demoUrl" class="project-card__no-link">
        Liens disponibles prochainement
      </span>
    </footer>
  </article>
</template>

<style scoped>
.project-card__preview {
  /* Negative margin bleeds the image to the card edges despite the card's padding */
  margin: calc(-1 * var(--spacing-md)) calc(-1 * var(--spacing-md)) 0;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.project-card__preview-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow), opacity var(--transition-slow);
}

.project-card:hover .project-card__preview-img {
  transform: scale(1.03);
  opacity: 0.85;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.project-card__name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text);
}

.project-card__status {
  font-size: var(--font-size-sm);
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.project-card__status--done {
  color: var(--color-success);
  background-color: rgba(34, 197, 94, 0.1);
}

.project-card__status--wip {
  color: var(--color-warning);
  background-color: rgba(245, 158, 11, 0.1);
}

.project-card__description {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
}

.project-card__section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.project-card__section-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-card__section-body {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: auto;
}

.project-card__footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding-top: var(--spacing-xs);
  border-top: 1px solid var(--color-border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.project-card__link:hover {
  color: var(--color-primary);
}

.project-card__link--demo {
  color: var(--color-primary);
}

.project-card__no-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
