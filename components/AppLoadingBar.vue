<template>
  <div v-show="loading" class="fixed top-0 left-0 w-full z-[100]">
    <div class="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-loading-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const progress = ref(0)
let timer = null
const router = useRouter()

function startLoading() {
  loading.value = true
  progress.value = 0
  timer = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10
    }
  }, 100)
}

function finishLoading() {
  progress.value = 100
  setTimeout(() => {
    loading.value = false
    progress.value = 0
    clearInterval(timer)
  }, 300)
}

onMounted(() => {
  router.beforeEach((to, from, next) => {
    startLoading()
    next()
  })
  router.afterEach(() => {
    finishLoading()
  })
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
@keyframes loading-bar {
  0% { width: 0; }
  100% { width: 100%; }
}
.animate-loading-bar {
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}
</style>
