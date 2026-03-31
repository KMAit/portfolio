<script setup lang="ts">
import { ref } from 'vue'
import type { ContactInfo } from '@/types/index'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'

defineProps<{
  contact: ContactInfo
}>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)

const processSteps = ['Brief', 'Devis sous 24h', 'On démarre'] as const

// Email stored as base64 to prevent trivial scraping from the static JS bundle.
// atob() runs in the browser at runtime — the plain address never appears in the build output.
const mailtoHref = `mailto:${atob('YWl0YWhtZWRrYW1lbEBnbWFpbC5jb20=')}`

// BASE_URL prefix required for correct asset resolution on GitHub Pages (/portfolio/)
const base = import.meta.env.BASE_URL
</script>

<template>
  <section ref="sectionRef" class="contact section" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="section__title reveal">Contact</h2>

      <div class="contact__inner">
        <!-- Left: availability statement + process -->
        <div class="contact__left reveal-item">
          <p class="contact__availability">
            <span class="availability-dot" aria-hidden="true"></span>
            Disponible pour de nouvelles missions — remote ou Paris.
          </p>

          <p class="contact__description">
            Vous avez un projet web à développer ou une équipe à renforcer ? Parlons-en. Je réponds
            sous 24h.
          </p>

          <!-- Engagement process -->
          <ol class="contact__process" aria-label="Processus d'engagement">
            <li v-for="(step, index) in processSteps" :key="step" class="contact__process-step">
              <span class="contact__process-number" aria-hidden="true">{{ index + 1 }}</span>
              <span>{{ step }}</span>
              <span
                v-if="index < processSteps.length - 1"
                class="contact__process-arrow"
                aria-hidden="true"
                >→</span
              >
            </li>
          </ol>
        </div>

        <!-- Right: action links -->
        <div class="contact__right reveal-item">
          <a
            :href="mailtoHref"
            class="contact__cta-email"
            aria-label="Envoyer un email à Kamel AÏT AHMED"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Envoyer un email
          </a>

          <!-- Secondary links -->
          <div class="contact__links">
            <a
              :href="contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
              aria-label="Voir le profil GitHub de Kamel AÏT AHMED"
            >
              <IconGithub :size="18" />
              GitHub
            </a>

            <a
              :href="contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
              aria-label="Voir le profil LinkedIn de Kamel AÏT AHMED"
            >
              <IconLinkedin :size="18" />
              LinkedIn
            </a>
          </div>

          <a
            :href="`${base}documents/CV_Kamel_AIT_AHMED_Developpeur_Fullstack.pdf`"
            download
            class="contact__cv-download"
            aria-label="Télécharger le CV de Kamel AÏT AHMED au format PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--color-surface);
}

/* ── Inner layout ─────────────────────────────────────────── */
.contact__inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

/* ── Left column ──────────────────────────────────────────── */
.contact__left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact__availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text);
}

.contact__description {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
  max-width: 48ch;
}

/* ── Process ──────────────────────────────────────────────── */
.contact__process {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  width: fit-content;
}

.contact__process-step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text);
}

.contact__process-number {
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

.contact__process-arrow {
  color: var(--color-text-muted);
}

/* ── Right column ─────────────────────────────────────────── */
.contact__right {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

/* ── Email CTA ────────────────────────────────────────────── */
.contact__cta-email {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.75rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: #fff;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  width: fit-content;
  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

.contact__cta-email:hover {
  background-color: var(--color-primary-hover);
  color: #fff;
  transform: translateY(-1px);
}

/* ── Secondary links ──────────────────────────────────────── */
.contact__links {
  display: flex;
  gap: var(--spacing-sm);
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.contact__link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* ── CV download ──────────────────────────────────────────── */
.contact__cv-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  width: fit-content;
  transition: color var(--transition-fast);
}

.contact__cv-download:hover {
  color: var(--color-text);
}

/* ── Responsive ───────────────────────────────────────────── */
@media (min-width: 768px) {
  .contact__inner {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-lg);
  }

  .contact__left,
  .contact__right {
    flex: 1;
  }
}
</style>
