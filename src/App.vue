<!-- @format -->

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useDate } from "./composables/useDate";

const { getCurrentDateInfo } = useDate();
const { formattedDate } = getCurrentDateInfo();
const msg = "Nyt on viikko";
</script>

<template>
  <div class="sky">
    <div class="sun" role="img" aria-label="Aurinko"></div>
    <div class="cloud cloud1" role="img" aria-label="Pilvi"></div>
    <div class="cloud cloud2" role="img" aria-label="Pilvi"></div>
    <div class="cloud cloud3" role="img" aria-label="Pilvi"></div>
    <div class="cloud cloud4" role="img" aria-label="Pilvi"></div>
    <div class="cloud cloud5" role="img" aria-label="Pilvi"></div>
    <div class="cloud cloud6" role="img" aria-label="Pilvi"></div>
    <div class="app-container">
      <div class="main-content">
        <HelloWorld :msg="msg" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style>
:root {
  --primary-color: #ffffff;
  --secondary-color: #ffffff;
  --text-color: #ffffff;
  --background-color: #f8f9fa;
  --sun-color: #FFD700;
  --sun-glow: #FFA500;
  --sky-gradient-start: #87CEEB;
  --sky-gradient-end: #4A90E2;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--text-color);
  min-height: 100vh;
  overflow-x: hidden;
}

.sky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, var(--sky-gradient-start), var(--sky-gradient-end));
  z-index: -1;
}

.sun {
  position: fixed;
  top: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  background: var(--sun-color);
  border-radius: 50%;
  box-shadow: 0 0 50px var(--sun-color), 0 0 100px var(--sun-glow);
  animation: glow 3s ease-in-out infinite alternate;
}

.cloud {
  position: fixed;
  background: white;
  border-radius: 50px;
  opacity: 0.8;
}

.cloud1 {
  top: 15%;
  width: 100px;
  height: 40px;
  animation: float 60s linear infinite;
}

.cloud2 {
  top: 35%;
  width: 150px;
  height: 60px;
  animation: float 70s linear infinite;
  animation-delay: -10s;
}

.cloud3 {
  top: 55%;
  width: 120px;
  height: 50px;
  animation: float 65s linear infinite;
  animation-delay: -20s;
}

.cloud4 {
  top: 25%;
  width: 80px;
  height: 30px;
  animation: float 75s linear infinite;
  animation-delay: -30s;
}

.cloud5 {
  top: 45%;
  width: 130px;
  height: 45px;
  animation: float 80s linear infinite;
  animation-delay: -40s;
}

.cloud6 {
  top: 65%;
  width: 90px;
  height: 35px;
  animation: float 85s linear infinite;
  animation-delay: -50s;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: white;
  border-radius: 50%;
}

.cloud::before {
  width: 50px;
  height: 50px;
  top: -20px;
  left: 15px;
}

.cloud::after {
  width: 30px;
  height: 30px;
  top: -10px;
  right: 15px;
}

/* Additional cloud variations */
.cloud4::before {
  width: 40px;
  height: 40px;
  top: -15px;
  left: 10px;
}

.cloud4::after {
  width: 25px;
  height: 25px;
  top: -8px;
  right: 10px;
}

.cloud5::before {
  width: 45px;
  height: 45px;
  top: -18px;
  left: 12px;
}

.cloud5::after {
  width: 35px;
  height: 35px;
  top: -12px;
  right: 12px;
}

.cloud6::before {
  width: 35px;
  height: 35px;
  top: -12px;
  left: 8px;
}

.cloud6::after {
  width: 20px;
  height: 20px;
  top: -5px;
  right: 8px;
}

@keyframes float {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100vw);
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 50px var(--sun-color), 0 0 100px var(--sun-glow);
  }
  to {
    box-shadow: 0 0 70px var(--sun-color), 0 0 140px var(--sun-glow);
  }
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 4rem;
}

@media (prefers-reduced-motion: reduce) {
  .sun,
  .cloud,
  .cloud::before,
  .cloud::after {
    animation: none;
  }
}
</style>
