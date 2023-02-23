<!-- @format -->

<script setup lang="ts">
import { DateTime } from "luxon";
defineProps<{ msg: string }>();
const week = DateTime.local().weekNumber;
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="week">{{ week }}</p>
</template>

<style scoped>
.week {
  font-size: 20em;
  margin-top: 0;
}

</style>
