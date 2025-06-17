<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" :lang="locale" class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    <AppLoadingBar />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import AppLoadingBar from '~/components/AppLoadingBar.vue'
import { useState } from '#app'

// لغة الموقع (ar أو en)
const locale = useState('locale', () => 'ar')
</script>
