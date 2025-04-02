<!-- @format -->

<script setup lang="ts">
import { useDate } from "../composables/useDate";

interface Props {
  msg: string;
}

defineProps<Props>();
const { getCurrentDateInfo } = useDate();
const { weekNumber } = getCurrentDateInfo();
</script>

<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
  <div class="week" role="region" aria-label="Viikkonumero">
    <p>{{ weekNumber }}</p>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.week {
  text-align: center;
  margin: 0;
  padding: 0;
}

.week p {
  margin: 0;
  padding: 0;
  font-size: 12rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .week p {
    font-size: 8rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .week p {
    animation: none;
  }
}
</style>
