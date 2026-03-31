<script setup lang="ts">
import type { DeveloperProfile, ContactInfo } from '@/types/index'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'

defineProps<{
  profile: DeveloperProfile
  contact: ContactInfo
}>()

const processSteps = ['Brief', 'Développement', 'Livraison'] as const
</script>

<template>
  <header class="hero">
    <div class="container hero__inner">

      <div class="hero__availability animate-fade-in">
        <span class="availability-dot" aria-hidden="true"></span>
        <span>{{ profile.availability }}</span>
        <span class="hero__separator" aria-hidden="true">·</span>
        <span>{{ profile.responseTime }}</span>
      </div>

      <h1 class="hero__name animate-fade-in-up delay-100">
        {{ profile.fullName }}
      </h1>

      <p class="hero__title animate-fade-in-up delay-200">
        {{ profile.title }}
      </p>

      <p class="hero__tagline animate-fade-in-up delay-300">
        {{ profile.tagline }}
      </p>

      <ol class="hero__process animate-fade-in-up delay-400" aria-label="Processus de travail">
        <li
          v-for="(step, index) in processSteps"
          :key="step"
          class="hero__process-step"
        >
          <span class="hero__process-number" aria-hidden="true">{{ index + 1 }}</span>
          <span>{{ step }}</span>
          <span v-if="index < processSteps.length - 1" class="hero__process-arrow" aria-hidden="true">→</span>
        </li>
      </ol>

      <div class="hero__cta animate-fade-in-up delay-500">
        <a href="#contact" class="hero__cta-primary">
          Me contacter
        </a>

        <div class="hero__social">
          <a
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social-link"
            aria-label="Profil GitHub de Kamel AÏT AHMED"
          >
            <IconGithub :size="22" />
          </a>

          <a
            :href="contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social-link"
            aria-label="Profil LinkedIn de Kamel AÏT AHMED"
          >
            <IconLinkedin :size="22" />
          </a>
        </div>
      </div>

      <p class="hero__location animate-fade-in delay-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {{ profile.location }}
      </p>

    </div>
  </header>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-sm);
  /* Radial gradient at the top to add depth without competing with content */
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 70%),
              var(--color-bg);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-width: 720px;
}

.hero__availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.hero__separator {
  opacity: 0.4;
}

.hero__name {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text);
  line-height: var(--line-height-tight);
}

.hero__title {
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-primary);
}

.hero__tagline {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
  max-width: 56ch;
}

.hero__process {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  width: fit-content;
}

.hero__process-step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text);
}

.hero__process-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  background-color: var(--color-primary-muted);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.hero__process-arrow {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.hero__cta-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: #fff;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.hero__cta-primary:hover {
  background-color: var(--color-primary-hover);
  color: #fff;
  transform: translateY(-1px);
}

.hero__social {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.hero__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.hero__social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.hero__location {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

@media (min-width: 768px) {
  .hero__name {
    font-size: var(--font-size-4xl);
  }

  .hero__tagline {
    font-size: var(--font-size-xl);
  }
}
</style>
