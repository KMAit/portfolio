import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Observes elements inside a container ref and adds `.is-visible` when they
 * enter the viewport. Pairs with `.reveal` and `.reveal-item` classes in animations.css.
 *
 * @param containerRef - Template ref of the parent element to scope the query
 * @param selector     - CSS selector for elements to observe (default: `.reveal, .reveal-item`)
 * @param staggerMs    - Delay increment in ms between each staggered child (default: 100)
 */
export function useScrollAnimation(
  containerRef: Ref<HTMLElement | null>,
  selector = '.reveal, .reveal-item',
  staggerMs = 100,
): void {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    const elements = containerRef.value.querySelectorAll<HTMLElement>(selector)

    if (elements.length === 0) return

    // Only .reveal-item elements get a stagger delay via CSS custom property.
    // .reveal elements all animate at the same time (no delay needed).
    let staggerIndex = 0
    elements.forEach((el) => {
      if (el.classList.contains('reveal-item')) {
        el.style.setProperty('--delay', `${staggerIndex * staggerMs}ms`)
        staggerIndex++
      }
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Unobserve after reveal so the animation plays once, not on every re-entry
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
