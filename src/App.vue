<script setup lang="ts">
import { developerProfile, projects, stackCategories, contactInfo, aboutText } from '@/data/portfolio'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import StackSection from '@/components/StackSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <!-- Skip-to-content link for keyboard users -->
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>

  <div id="app-root">
    <HeroSection :profile="developerProfile" :contact="contactInfo" />

    <main id="main-content">
      <AboutSection :text="aboutText" />
      <StackSection :categories="stackCategories" />
      <ProjectsSection :projects="projects" />
      <ContactSection :contact="contactInfo" />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>
          &copy; {{ new Date().getFullYear() }} Kamel AÏT AHMED
          <span aria-hidden="true">·</span>
          Développeur Web Fullstack Freelance
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Skip link — visible only on focus for keyboard navigation */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--spacing-sm);
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  border-radius: var(--radius-md);
  z-index: 9999;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--spacing-sm);
}
</style>

<style scoped>
.site-footer {
  padding: var(--spacing-md) var(--spacing-sm);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.site-footer p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
