<template>
  <aside>
    <!-- Newsletter Signup -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h4 class="text-2xl font-bold text-white mb-4">اشترك في النشرة الإخبارية</h4>
      <p class="text-white/70 mb-6">احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني</p>
      <form @submit.prevent="subscribeNewsletter" class="space-y-4">
        <input v-model="newsletter.email" type="email" placeholder="بريدك الإلكتروني" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors">
        <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">اشترك الآن</button>
      </form>
    </div>

    <!-- Featured Post -->
    <div v-if="featuredPost" class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h4 class="text-2xl font-bold text-white mb-6 flex items-center">
        <svg class="w-8 h-8 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        المقال المميز
      </h4>
      <NuxtLink :to="`/blog/${featuredPost.id}`" class="block group cursor-pointer">
        <div class="h-40 bg-gradient-to-br from-blue-500/50 to-purple-600/50 rounded-xl mb-4 relative overflow-hidden">
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>
        <h5 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">{{ featuredPost.title }}</h5>
        <p class="text-white/70 mb-2 line-clamp-2">{{ featuredPost.excerpt }}</p>
        <div class="flex items-center space-x-2 space-x-reverse text-white/60 text-sm">
          <span>{{ featuredPost.date }}</span>
          <span>•</span>
          <span>{{ featuredPost.views }} مشاهدة</span>
        </div>
      </NuxtLink>
    </div>

    <!-- Popular Posts -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h4 class="text-2xl font-bold text-white mb-6">المقالات الأكثر قراءة</h4>
      <div class="space-y-6">
        <NuxtLink v-for="post in popularPosts" :key="post.id" :to="`/blog/${post.id}`" class="flex space-x-4 space-x-reverse group cursor-pointer">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg flex-shrink-0 relative overflow-hidden">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
          <div class="flex-1">
            <h5 class="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">{{ post.title }}</h5>
            <div class="flex items-center space-x-2 space-x-reverse text-white/60 text-sm">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.views }} مشاهدة</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Categories -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h4 class="text-2xl font-bold text-white mb-6">التصنيفات</h4>
      <div class="space-y-3">
        <NuxtLink
          v-for="category in categoriesWithCount"
          :key="category.name"
          :to="{ path: '/blog', query: { category: category.name } }"
          class="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span class="text-white">{{ category.name }}</span>
          <span class="bg-blue-600/50 text-white px-2 py-1 rounded-full text-sm">{{ category.count }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Tags -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h4 class="text-2xl font-bold text-white mb-6">الكلمات المفتاحية</h4>
      <div class="flex flex-wrap gap-2">
        <NuxtLink
          v-for="tag in tags"
          :key="tag"
          :to="{ path: '/blog', query: { tag } }"
          class="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </div>

    <!-- Latest Comments -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h4 class="text-2xl font-bold text-white mb-6">آخر التعليقات</h4>
      <div class="space-y-4">
        <div v-for="comment in latestComments" :key="comment.id" class="bg-white/5 rounded-lg p-4 text-right">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-2">
              {{ comment.author.charAt(0) }}
            </div>
            <span class="text-white font-semibold">{{ comment.author }}</span>
          </div>
          <p class="text-white/80 text-sm mb-1">{{ comment.text }}</p>
          <NuxtLink :to="`/blog/${comment.postId}`" class="text-blue-400 text-xs hover:underline">عرض المقال</NuxtLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  newsletter: Object,
  subscribeNewsletter: Function,
  featuredPost: Object,
  popularPosts: Array,
  categoriesWithCount: Array,
  tags: Array,
  latestComments: Array
})
</script>
