<!-- @format -->

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import { DateTime } from "luxon";

const date = DateTime.local().toFormat("dd.MM.yyyy");
const msg = `Nyt on viikko`;
</script>

<template>
  <HelloWorld :msg="msg" />
  <Footer />
</template>
