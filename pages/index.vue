<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="container mx-auto text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            الحلول البرمجية
            <span class="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              المتقدمة
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            في Bzzix، نحول أفكارك إلى حلول تقنية مبتكرة تدفع عملك نحو المستقبل
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              ابدأ مشروعك
            </button>
            <button class="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              تعرف علينا أكثر
            </button>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-6 bg-white/5 backdrop-blur-sm">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">خدماتنا المتخصصة</h3>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الحلول التقنية المصممة خصيصاً لتلبية احتياجات عملك
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h4>
            <p class="text-white/70 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-8">
              لماذا تختار 
              <span class="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Bzzix</span>؟
            </h3>
            <p class="text-xl text-white/80 mb-8 leading-relaxed">
              نحن فريق من المطورين والمصممين المتخصصين في تقديم حلول تقنية مبتكرة. 
              خبرتنا الواسعة وفهمنا العميق لاحتياجات السوق يجعلنا الشريك المثالي لنجاح مشروعك.
            </p>
            
            <div class="space-y-6">
              <div v-for="feature in features" :key="feature.id" class="flex items-start space-x-4 space-x-reverse">
                <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h5 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h5>
                  <p class="text-white/70">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">{{ stats.projects }}+</div>
                  <div class="text-white/70">مشروع مكتمل</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">{{ stats.clients }}+</div>
                  <div class="text-white/70">عميل راضي</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">{{ stats.experience }}+</div>
                  <div class="text-white/70">سنوات خبرة</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">24/7</div>
                  <div class="text-white/70">دعم فني</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-white/5 backdrop-blur-sm">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">مشاريعنا المميزة</h3>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            نفخر بالمشاريع التي أنجزناها وأثرت إيجابياً على أعمال عملائنا
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id"
               class="group cursor-pointer">
            <div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-blue-500/50 to-purple-600/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex items-center space-x-2 space-x-reverse">
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h4 class="text-xl font-bold text-white mb-3">{{ project.title }}</h4>
                <p class="text-white/70 mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech" 
                        class="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">تواصل معنا</h3>
            <p class="text-xl text-white/70">
              جاهزون لتحويل فكرتك إلى واقع رقمي مذهل
            </p>
          </div>

          <div class="flex flex-col items-center gap-2 mb-8">
            <div class="flex items-center gap-2">
              <a href="tel:010009448040" class="text-white/80 hover:text-white transition-colors flex items-center cursor-pointer">
                <i class="fas fa-phone-alt ml-1"></i>
                <span>010009448040</span>
              </a>
              <span class="text-white/40">|</span>
              <a href="https://wa.me/2010009448040" target="_blank" rel="noopener" class="text-white/80 hover:text-green-400 transition-colors flex items-center cursor-pointer">
                <i class="fab fa-whatsapp ml-1"></i>
                <span>واتساب</span>
              </a>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <div class="space-y-8">
                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 class="text-lg font-semibold text-white mb-2">البريد الإلكتروني</h5>
                    <p class="text-white/70">info@bzzix.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 class="text-lg font-semibold text-white mb-2">الهاتف</h5>
                    <a href="tel:010009448040" class="text-white/70 hover:text-white transition-colors cursor-pointer">010009448040</a>
                  </div>
                </div>

                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 class="text-lg font-semibold text-white mb-2">العنوان</h5>
                    <p class="text-white/70">كفر الشيخ، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label class="block text-white mb-2">الاسم</label>
                  <input v-model="form.name" type="text" required
                         class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors">
                </div>
                
                <div>
                  <label class="block text-white mb-2">البريد الإلكتروني</label>
                  <input v-model="form.email" type="email" required
                         class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors">
                </div>
                
                <div>
                  <label class="block text-white mb-2">الرسالة</label>
                  <textarea v-model="form.message" rows="5" required
                            class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" 
                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <!-- تم نقل الفوتر للكمبوننت -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Form data
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Services data
const services = ref([
  {
    id: 1,
    icon: 'fas fa-code',
    title: 'تطوير المواقع',
    description: 'نطور مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات مثل Vue.js و Nuxt.js و React'
  },
  {
    id: 2,
    icon: 'fas fa-mobile-alt',
    title: 'تطبيقات الجوال',
    description: 'تطبيقات ذكية للأندرويد و iOS تعمل بسلاسة وتوفر تجربة مستخدم استثنائية'
  },
  {
    id: 3,
    icon: 'fas fa-database',
    title: 'قواعد البيانات',
    description: 'تصميم وإدارة قواعد بيانات قوية وآمنة لضمان حفظ بياناتك وسهولة الوصول إليها'
  },
  {
    id: 4,
    icon: 'fas fa-cloud',
    title: 'الحوسبة السحابية',
    description: 'حلول سحابية متقدمة لتحسين الأداء وتوفير التكاليف وضمان الأمان'
  },
  {
    id: 5,
    icon: 'fas fa-shield-alt',
    title: 'الأمن السيبراني',
    description: 'حماية شاملة لأنظمتك من التهديدات السيبرانية مع أحدث بروتوكولات الأمان'
  },
  {
    id: 6,
    icon: 'fas fa-cogs',
    title: 'الصيانة والدعم',
    description: 'دعم فني مستمر وصيانة دورية لضمان عمل أنظمتك بأفضل أداء'
  },
  {
    id: 7,
    icon: 'fas fa-chalkboard-teacher',
    title: 'منصات تعليمية وتدريبية',
    description: 'بناء مواقع ومنصات تعليمية وتدريبية متكاملة لإدارة الدورات والاختبارات والتقارير.'
  },
  {
    id: 8,
    icon: 'fas fa-plug',
    title: 'التكامل مع الأنظمة وواجهات API',
    description: 'ربط وتكامل مع أي نظام أو منصة عبر API أو xAPI أو Webhooks لتحقيق الأتمتة والتكامل الذكي.'
  },
  {
    id: 9,
    icon: 'fas fa-robot',
    title: 'حلول الذكاء الاصطناعي',
    description: 'تطوير حلول تعتمد على الذكاء الاصطناعي والتعلم الآلي لتحليل البيانات وأتمتة الأعمال.'
  },
  {
    id: 10,
    icon: 'fas fa-globe',
    title: 'تطوير مواقع متعددة اللغات',
    description: 'بناء مواقع تدعم لغات متعددة وتجربة مستخدم عالمية مع تحسينات SEO متقدمة.'
  }
])

// Features data
const features = ref([
  {
    id: 1,
    title: 'فريق متخصص',
    description: 'مطورون محترفون مع سنوات من الخبرة في أحدث التقنيات'
  },
  {
    id: 2,
    title: 'جودة عالية',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه'
  },
  {
    id: 3,
    title: 'دعم مستمر',
    description: 'نقدم الدعم والصيانة لجميع مشاريعنا حتى بعد التسليم'
  },
  {
    id: 4,
    title: 'أسعار تنافسية',
    description: 'أسعار عادلة ومناسبة مع خطط دفع مرنة'
  }
])

// Stats data
const stats = ref({
  projects: 150,
  clients: 80,
  experience: 5
})

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية',
    description: 'متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات',
    technologies: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'تطبيق إدارة المهام',
    description: 'تطبيق ذكي لإدارة المهام والمشاريع للفرق والشركات',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'نظام إدارة المستشفيات',
    description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
    technologies: ['Laravel', 'MySQL', 'Bootstrap']
  },
  {
    id: 4,
    title: 'منصة التعليم الإلكتروني',
    description: 'منصة تعليمية تفاعلية مع إدارة الكورسات والامتحانات',
    technologies: ['Nuxt.js', 'Strapi', 'PostgreSQL']
  },
  {
    id: 5,
    title: 'تطبيق خدمات التوصيل',
    description: 'تطبيق ذكي لخدمات التوصيل مع تتبع الطلبات في الوقت الفعلي',
    technologies: ['Flutter', 'Node.js', 'Socket.io']
  },
  {
    id: 6,
    title: 'نظام إدارة العملاء',
    description: 'CRM متطور لإدارة العلاقات مع العملاء وتحليل البيانات',
    technologies: ['Angular', 'Django', 'Chart.js']
  }
])

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form)
  alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً')
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>