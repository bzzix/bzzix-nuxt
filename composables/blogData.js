// blogData.js
import { ref, computed, reactive } from 'vue'

export const newsletter = reactive({
  email: ''
})

export const allPosts = ref([
  {
    id: 1,
    title: 'مستقبل تطوير المواقع مع Vue.js 3 و Nuxt.js',
    excerpt: 'اكتشف كيف تقوم التقنيات الحديثة مثل Vue.js 3 و Nuxt.js بثورة في عالم تطوير المواقع وتحسين تجربة المطورين والمستخدمين.',
    content: '',
    category: 'تطوير الويب',
    author: 'أحمد محمد',
    date: '15 يونيو 2025',
    readTime: 8,
    views: 1250,
    likes: 89,
    tags: ['vue.js', 'nuxt.js', 'javascript', 'frontend'],
    featured: true
  },
  {
    id: 2,
    title: 'أفضل الممارسات في أمان التطبيقات الويب',
    excerpt: 'دليل شامل حول كيفية حماية تطبيقاتك من الثغرات الأمنية الشائعة وتطبيق أفضل الممارسات في الأمان السيبراني.',
    content: '',
    category: 'الأمن السيبراني',
    author: 'فاطمة أحمد',
    date: '12 يونيو 2025',
    readTime: 12,
    views: 980,
    likes: 67,
    tags: ['security', 'web-security', 'cybersecurity', 'best-practices']
  },
  {
    id: 3,
    title: 'كيفية اختيار قاعدة البيانات المناسبة لمشروعك',
    excerpt: 'مقارنة شاملة بين أنواع قواعد البيانات المختلفة وكيفية اختيار الأنسب حسب نوع المشروع ومتطلباته.',
    content: '',
    category: 'قواعد البيانات',
    author: 'محمد علي',
    date: '10 يونيو 2025',
    readTime: 10,
    views: 756,
    likes: 45,
    tags: ['database', 'sql', 'nosql', 'mongodb', 'postgresql']
  },
  {
    id: 4,
    title: 'الذكاء الاصطناعي في تطوير البرمجيات',
    excerpt: 'كيف يغير الذكاء الاصطناعي وأدوات مثل ChatGPT و GitHub Copilot من طريقة تطوير البرمجيات وكتابة الكود.',
    content: '',
    category: 'الذكاء الاصطناعي',
    author: 'سارة محمود',
    date: '8 يونيو 2025',
    readTime: 9,
    views: 1456,
    likes: 123,
    tags: ['ai', 'machine-learning', 'chatgpt', 'github-copilot', 'automation']
  },
  {
    id: 5,
    title: 'تطوير تطبيقات الجوال باستخدام Flutter',
    excerpt: 'دليل للمبتدئين حول كيفية استخدام Flutter لتطوير تطبيقات جوال متقدمة تعمل على أندرويد و iOS.',
    content: '',
    category: 'تطبيقات الجوال',
    author: 'عمر حسن',
    date: '5 يونيو 2025',
    readTime: 11,
    views: 834,
    likes: 56,
    tags: ['flutter', 'dart', 'mobile-development', 'android', 'ios']
  },
  {
    id: 6,
    title: 'مقدمة في الحوسبة السحابية مع AWS',
    excerpt: 'تعلم أساسيات الحوسبة السحابية وكيفية استخدام خدمات Amazon Web Services لبناء تطبيقات قابلة للتوسع.',
    content: '',
    category: 'الحوسبة السحابية',
    author: 'خالد يوسف',
    date: '3 يونيو 2025',
    readTime: 13,
    views: 692,
    likes: 38,
    tags: ['aws', 'cloud-computing', 'devops', 'infrastructure', 'scalability']
  },
  {
    id: 7,
    title: 'أفضل أدوات إدارة المشاريع البرمجية',
    excerpt: 'تعرف على أهم الأدوات والمنصات التي تساعدك في تنظيم وإدارة مشاريع البرمجة بكفاءة عالية.',
    content: '',
    category: 'إدارة المشاريع',
    author: 'منى عبد الله',
    date: '1 يونيو 2025',
    readTime: 7,
    views: 1100,
    likes: 60,
    tags: ['project-management', 'tools', 'productivity']
  },
  {
    id: 8,
    title: 'دليل البدء في تعلم البرمجة للأطفال',
    excerpt: 'طرق وأفكار لتعليم الأطفال البرمجة من الصفر باستخدام أدوات ممتعة وتفاعلية.',
    content: '',
    category: 'تعليم البرمجة',
    author: 'سعيد مصطفى',
    date: '28 مايو 2025',
    readTime: 6,
    views: 900,
    likes: 40,
    tags: ['kids', 'education', 'programming', 'scratch']
  },
  {
    id: 9,
    title: 'كيف تختار استضافة المواقع المناسبة؟',
    excerpt: 'نصائح مهمة لاختيار أفضل استضافة لموقعك الإلكتروني بناءً على احتياجاتك وميزانيتك.',
    content: '',
    category: 'استضافة المواقع',
    author: 'أحمد كمال',
    date: '25 مايو 2025',
    readTime: 8,
    views: 1200,
    likes: 55,
    tags: ['hosting', 'web', 'servers', 'domains']
  },
  {
    id: 10,
    title: 'أهمية واجهات برمجة التطبيقات (APIs) في العصر الحديث',
    excerpt: 'تعرف على دور الـ APIs في ربط الأنظمة وتسهيل التكامل بين الخدمات الرقمية.',
    content: '',
    category: 'APIs',
    author: 'ليلى يوسف',
    date: '20 مايو 2025',
    readTime: 9,
    views: 980,
    likes: 48,
    tags: ['api', 'integration', 'web', 'xapi']
  },
  {
    id: 11,
    title: 'تجربة المستخدم وأهميتها في نجاح المشاريع الرقمية',
    excerpt: 'كيف تؤثر تجربة المستخدم على نجاح المواقع والتطبيقات وأهم المبادئ لتصميم تجربة مميزة.',
    content: '',
    category: 'تجربة المستخدم',
    author: 'محمود فؤاد',
    date: '15 مايو 2025',
    readTime: 7,
    views: 1050,
    likes: 52,
    tags: ['ux', 'ui', 'design', 'usability']
  }
])

export const selectedCategory = ref('الكل')
export const searchQuery = ref('')

export const filteredPosts = computed(() => {
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

export const featuredPost = computed(() => {
  return allPosts.value.find(post => post.featured)
})

export const categoriesWithCount = computed(() => {
  const map = {}
  allPosts.value.forEach(post => {
    map[post.category] = (map[post.category] || 0) + 1
  })
  return Object.entries(map).map(([name, count]) => ({ name, count }))
})

export const tags = computed(() => {
  const set = new Set()
  allPosts.value.forEach(post => post.tags.forEach(tag => set.add(tag)))
  return Array.from(set)
})

export const popularPosts = computed(() => {
  return [...allPosts.value].sort((a, b) => b.views - a.views).slice(0, 4)
})

export const latestComments = ref([
  { id: 1, author: 'زائر', text: 'مقال رائع ومفيد جداً!', postId: 1 },
  { id: 2, author: 'سارة', text: 'استفدت كثيراً من نصائح الأمان.', postId: 2 },
  { id: 3, author: 'محمد', text: 'شرح مبسط وسهل للذكاء الاصطناعي.', postId: 4 },
  { id: 4, author: 'أحمد', text: 'بانتظار المزيد من المقالات عن تطوير الجوال.', postId: 5 }
])

// دالة الاشتراك في النشرة البريدية (محاكاة)
export function subscribeNewsletter() {
  // هنا يمكنك إضافة منطق إرسال البريد أو التنبيه
  alert('تم الاشتراك بنجاح!')
  newsletter.email = ''
}
