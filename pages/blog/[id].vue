<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24">
    <section class="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
      <div class="flex-1">
        <NuxtLink to="/blog" class="text-blue-400 hover:underline flex items-center mb-8">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          العودة للمدونة
        </NuxtLink>
        <div v-if="post" class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div class="mb-6 flex flex-wrap gap-3 items-center">
            <span class="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm">{{ post.category }}</span>
            <span class="text-white/80 text-sm">{{ post.date }}</span>
            <span class="text-white/60 text-xs">{{ post.readTime }} دقائق قراءة</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ post.title }}</h1>
          <div class="flex items-center mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-semibold text-lg">{{ post.author && post.author.charAt(0) }}</span>
            </div>
            <div>
              <p class="text-white font-medium">{{ post.author }}</p>
            </div>
          </div>
          <p class="text-white/80 text-lg mb-8">{{ post.excerpt }}</p>
          <div class="prose prose-invert max-w-none text-white" v-html="post.content || 'محتوى المقال قيد الإعداد...'" />
          <div class="mt-10 flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="bg-white/10 text-white px-3 py-1 rounded-full text-sm">#{{ tag }}</span>
          </div>
        </div>
        <div v-else class="text-center text-white/70 py-24 text-xl">المقال غير موجود أو تم حذفه.</div>
      </div>
      <div class="w-full lg:w-1/3 mt-12 lg:mt-0">
        <BlogSidebar
          :newsletter="newsletter"
          :subscribeNewsletter="subscribeNewsletter"
          :featuredPost="featuredPost"
          :popularPosts="popularPosts"
          :categoriesWithCount="categoriesWithCount"
          :tags="tags"
          :latestComments="latestComments"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import BlogSidebar from '~/components/BlogSidebar.vue'
import {
  allPosts,
  newsletter,
  subscribeNewsletter,
  featuredPost,
  popularPosts,
  categoriesWithCount,
  tags,
  latestComments
} from '~/composables/blogData.js'

const route = useRoute()
const postId = computed(() => Number(route.params.id))
const post = computed(() => allPosts.value.find(p => p.id === postId.value))
</script>
