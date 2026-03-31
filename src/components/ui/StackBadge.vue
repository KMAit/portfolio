<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="stack-badge">{{ label }}</span>
</template>

<style scoped>
.stack-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-primary);
  background-color: var(--color-primary-muted);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.stack-badge:hover {
  background-color: rgba(37, 99, 235, 0.2);
  border-color: rgba(37, 99, 235, 0.5);
}
</style>