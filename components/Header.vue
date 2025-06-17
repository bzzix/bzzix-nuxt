<template>
  <nav class="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
            <span class="text-white font-bold text-xl">B</span>
          </NuxtLink>
          <NuxtLink to="/" class="text-2xl font-bold text-white cursor-pointer">Bzzix</NuxtLink>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <button @click="navigateToSection('services')" class="text-white/80 hover:text-white transition-colors bg-transparent cursor-pointer">خدماتنا</button>
          <button @click="navigateToSection('about')" class="text-white/80 hover:text-white transition-colors bg-transparent cursor-pointer">من نحن</button>
          <button @click="navigateToSection('projects')" class="text-white/80 hover:text-white transition-colors bg-transparent cursor-pointer">المشاريع</button>
          <NuxtLink to="/blog" class="text-white/80 hover:text-white transition-colors cursor-pointer">المدونة</NuxtLink>
          <button @click="navigateToSection('contact')" class="text-white/80 hover:text-white transition-colors bg-transparent cursor-pointer">تواصل معنا</button>
        </div>
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-white p-2 cursor-pointer"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <button @click="navigateToSection('services')" class="text-white/80 hover:text-white transition-colors bg-transparent text-right cursor-pointer">خدماتنا</button>
          <button @click="navigateToSection('about')" class="text-white/80 hover:text-white transition-colors bg-transparent text-right cursor-pointer">من نحن</button>
          <button @click="navigateToSection('projects')" class="text-white/80 hover:text-white transition-colors bg-transparent text-right cursor-pointer">المشاريع</button>
          <NuxtLink to="/blog" class="text-white/80 hover:text-white transition-colors text-right cursor-pointer">المدونة</NuxtLink>
          <button @click="navigateToSection('contact')" class="text-white/80 hover:text-white transition-colors bg-transparent text-right cursor-pointer">تواصل معنا</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const router = useRouter()

function navigateToSection(section) {
  if (router.currentRoute.value.path !== '/') {
    router.push({ path: '/', hash: `#${section}` })
  } else {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = `#${section}`
    }
  }
  mobileMenuOpen.value = false
}
</script>
