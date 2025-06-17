<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24">
    <!-- Blog Header -->
    <section class="pt-32 pb-16 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">
          مدونة 
          <span class="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Bzzix
          </span>
        </h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          اكتشف أحدث الاتجاهات في عالم التقنية والبرمجة مع نصائح وإرشادات من خبرائنا
        </p>
        
        <!-- Search Bar -->
        <div class="max-w-lg mx-auto">
          <div class="relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="ابحث في المقالات..."
              class="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
            >
            <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="pb-20 px-6">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <!-- Featured Post -->
            <div v-if="featuredPost" class="mb-16">
              <h3 class="text-2xl font-bold text-white mb-8 flex items-center">
                <svg class="w-8 h-8 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                المقال المميز
              </h3>
              <div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 group hover:bg-white/15 transition-all duration-300">
                <div class="h-80 bg-gradient-to-br from-blue-500/50 to-purple-600/50 relative overflow-hidden">
                  <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div class="absolute bottom-6 left-6 right-6">
                    <div class="flex items-center space-x-4 space-x-reverse mb-4">
                      <span class="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm">{{ featuredPost.category }}</span>
                      <span class="text-white/80 text-sm">{{ featuredPost.date }}</span>
                    </div>
                  </div>
                </div>
                <div class="p-8">
                  <h4 class="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {{ featuredPost.title }}
                  </h4>
                  <p class="text-white/70 text-lg mb-6 leading-relaxed">{{ featuredPost.excerpt }}</p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3 space-x-reverse">
                      <div class="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span class="text-white font-semibold text-sm">{{ featuredPost.author.charAt(0) }}</span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ featuredPost.author }}</p>
                        <p class="text-white/60 text-sm">{{ featuredPost.readTime }} دقائق قراءة</p>
                      </div>
                    </div>
                    <NuxtLink :to="`/blog/${featuredPost.id}`" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      اقرأ المزيد
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Blog Posts Grid (أسفل المقال المميز) -->
            <div>
              <!-- شبكة المقالات الرئيسية -->
              <div v-if="visiblePosts.length" class="grid md:grid-cols-2 gap-8 mb-12">
                <template v-for="post in visiblePosts" :key="post.id">
                  <NuxtLink
                    v-if="post && (!('featured' in post) || !post.featured)"
                    :to="`/blog/${post.id}`"
                    class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 group hover:bg-white/15 transition-all duration-300 cursor-pointer block"
                  >
                    <!-- ...محتوى المقال... -->
                    <div class="h-48 bg-gradient-to-br from-blue-500/30 to-purple-600/30 relative overflow-hidden">
                      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <div class="absolute top-4 left-4">
                        <span class="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs">
                          {{ post.category }}
                        </span>
                      </div>
                      <div class="absolute bottom-4 right-4">
                        <span class="text-white/80 text-sm">{{ post.date }}</span>
                      </div>
                    </div>
                    <div class="p-6">
                      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {{ post.title }}
                      </h3>
                      <p class="text-white/70 mb-4 line-clamp-3">{{ post.excerpt }}</p>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2 space-x-reverse">
                          <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-semibold text-xs">{{ post.author && post.author.charAt(0) }}</span>
                          </div>
                          <div>
                            <p class="text-white/90 text-sm">{{ post.author }}</p>
                            <p class="text-white/60 text-xs">{{ post.readTime }} دقائق</p>
                          </div>
                        </div>
                        <div class="flex items-center space-x-4 space-x-reverse text-white/60">
                          <div class="flex items-center space-x-1 space-x-reverse">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            <span class="text-xs">{{ post.views }}</span>
                          </div>
                          <div class="flex items-center space-x-1 space-x-reverse">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span class="text-xs">{{ post.likes }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </template>
              </div>
              <div v-else class="text-center text-white/70 py-12 text-lg">
                لا توجد مقالات متاحة حالياً
              </div>
            </div>

            <!-- Filter Tags -->
            <div class="mb-12">
              <div class="flex flex-wrap gap-3">
                <button 
                  v-for="category in categories" 
                  :key="category"
                  @click="filterByCategory(category)"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  ]"
                >
                  {{ category }}
                </button>
              </div>
            </div>

            <!-- Infinite Scroll -->
            <div ref="infiniteScrollTrigger"></div>

            <!-- Load More Button -->
            <div class="text-center mt-12">
              <button 
                v-if="hasMorePosts"
                @click="loadMorePosts" 
                class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                تحميل المزيد من المقالات
              </button>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3">
            <!-- Newsletter Signup -->
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
              <h4 class="text-2xl font-bold text-white mb-4">اشترك في النشرة الإخبارية</h4>
              <p class="text-white/70 mb-6">احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني</p>
              <form @submit.prevent="subscribeNewsletter" class="space-y-4">
                <input 
                  v-model="newsletter.email"
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  required
                  class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                >
                <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  اشترك الآن
                </button>
              </form>
            </div>

            <!-- Popular Posts -->
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
              <h4 class="text-2xl font-bold text-white mb-6">المقالات الأكثر قراءة</h4>
              <div class="space-y-6">
                <NuxtLink
                  v-for="post in popularPosts"
                  :key="post.id"
                  :to="`/blog/${post.id}`"
                  class="flex space-x-4 space-x-reverse group cursor-pointer"
                >
                  <div class="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div class="flex-1">
                    <h5 class="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {{ post.title }}
                    </h5>
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
                <div 
                  v-for="category in categoriesWithCount" 
                  :key="category.name"
                  class="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  @click="filterByCategory(category.name)"
                >
                  <span class="text-white">{{ category.name }}</span>
                  <span class="bg-blue-600/50 text-white px-2 py-1 rounded-full text-sm">{{ category.count }}</span>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
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
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mt-8">
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
                  <NuxtLink :to="`#post-${comment.postId}`" class="text-blue-400 text-xs hover:underline">عرض المقال</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Search and filter states
const searchQuery = ref('')
const selectedCategory = ref('الكل')

// Newsletter form
const newsletter = reactive({
  email: ''
})

// فلترة المقالات حسب البحث والتصنيف
const filteredPosts = computed(() => {
  let posts = allPosts.value
  if (selectedCategory.value && selectedCategory.value !== 'الكل') {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
    )
  }
  return posts
})

// Computed properties
const featuredPost = computed(() => {
  return allPosts.value.find(post => post.featured)
})

// Sidebar computed properties
const categoriesWithCount = computed(() => {
  const map = {}
  allPosts.value.forEach(post => {
    map[post.category] = (map[post.category] || 0) + 1
  })
  return Object.entries(map).map(([name, count]) => ({ name, count }))
})
const tags = computed(() => {
  const set = new Set()
  allPosts.value.forEach(post => post.tags.forEach(tag => set.add(tag)))
  return Array.from(set)
})
const popularPosts = computed(() => {
  return [...allPosts.value].sort((a, b) => b.views - a.views).slice(0, 4)
})
const latestComments = ref([
  { id: 1, author: 'زائر', text: 'مقال رائع ومفيد جداً!', postId: 1 },
  { id: 2, author: 'سارة', text: 'استفدت كثيراً من نصائح الأمان.', postId: 2 },
  { id: 3, author: 'محمد', text: 'شرح مبسط وسهل للذكاء الاصطناعي.', postId: 4 },
  { id: 4, author: 'أحمد', text: 'بانتظار المزيد من المقالات عن تطوير الجوال.', postId: 5 }
])

const postsPerPage = 6
const visibleCount = ref(postsPerPage)
const visiblePosts = computed(() => filteredPosts.value.filter(p => p && (!('featured' in p) || !p.featured)).slice(0, visibleCount.value))

console.log('Visible Posts:', visiblePosts.value)
const infiniteScrollTrigger = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMorePosts.value) {
      loadMorePosts()
    }
  })
  if (infiniteScrollTrigger.value) {
    observer.observe(infiniteScrollTrigger.value)
  }
})
onUnmounted(() => {
  if (observer && infiniteScrollTrigger.value) {
    observer.unobserve(infiniteScrollTrigger.value)
  }
})

const hasMorePosts = computed(() => visibleCount.value < filteredPosts.value.filter(p => !p.featured).length)
function loadMorePosts() {
  visibleCount.value += postsPerPage
}

// استخراج جميع التصنيفات (categories) من المقالات
const categories = computed(() => {
  const set = new Set(['الكل'])
  allPosts.value.forEach(post => set.add(post.category))
  return Array.from(set)
})

// دالة لتغيير التصنيف الحالي
function filterByCategory(category) {
  selectedCategory.value = category
}
</script>