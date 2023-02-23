<!-- @format -->

<script setup lang="ts">
import { DateTime } from "luxon";
defineProps<{ msg: string }>();
const week = DateTime.local().weekNumber;
</script>

<template>
  <div class="header">

    <h1>{{ msg }}</h1>
  </div>
  <div class="week">

    <p >{{ week }}</p>
  </div>
</template>

<style scoped>
.header{
 flex: 0 0 auto;

}
.week {
  flex: 1 0 auto;
  font-size: 20em;

}

.week p {
  margin: 0;
  padding: 0;
}

</style>
