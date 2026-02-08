<script setup lang="ts">
import Profile from '~/assets/general/images/about-me/profile.jpg'
import TNI from '~/assets/general/images/about-me/tni.png'
import type { ISkillCategoryType, ISkillType } from '~/types/home'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const activeCategoryId = ref<number>(1)

const CategorieLists: ISkillCategoryType[] = [
  { id: 1, value: 'Languages' },
  { id: 2, value: 'Frontend' },
  { id: 3, value: 'Backend' },
  { id: 4, value: 'Databases' },
  { id: 5, value: 'Servers' },
  { id: 6, value: 'Tools' }
]

const SkillLists: ISkillType[] = [
  {
    category: 1,
    name: 'Power Fx',
    level: 'Advanced',
    icon: 'simple-icons:powerfx'
  },
  {
    category: 1,
    name: 'SQL',
    level: 'Advanced',
    icon: 'devicon-plain:azuresqldatabase'
  },
  {
    category: 1,
    name: 'JavaScript',
    level: 'Intermediate',
    icon: 'mdi:language-javascript'
  },
  {
    category: 1,
    name: 'TypeScript',
    level: 'Intermediate',
    icon: 'mdi:language-typescript'
  },
  {
    category: 1,
    name: 'HTML',
    level: 'Intermediate',
    icon: 'mdi:language-html5'
  },
  {
    category: 1,
    name: 'CSS',
    level: 'Basic',
    icon: 'bx:bxl-css3'
  },
  {
    category: 2,
    name: 'Power Apps Canvas',
    level: 'Advanced',
    icon: 'simple-icons:powerapps'
  },
  {
    category: 2,
    name: 'Oracle Apex',
    level: 'Intermediate',
    icon: 'lineicons:oracle'
  },
  {
    category: 2,
    name: 'Vue',
    level: 'Intermediate',
    icon: 'mdi:vuejs'
  },
  {
    category: 2,
    name: 'Nuxt',
    level: 'Intermediate',
    icon: 'lineicons:nuxt'
  },
  {
    category: 2,
    name: 'React',
    level: 'Basic',
    icon: 'mdi:react'
  },
  {
    category: 2,
    name: 'Next',
    level: 'Basic',
    icon: 'lineicons:nextjs'
  },
  {
    category: 2,
    name: 'ASP .Net MVC',
    level: 'Basic',
    icon: 'devicon-plain:dotnetcore'
  },
  {
    category: 3,
    name: 'Power Automate Cloud',
    level: 'Advanced',
    icon: 'simple-icons:powerautomate'
  },
  {
    category: 3,
    name: 'Oracle Apex',
    level: 'Intermediate',
    icon: 'lineicons:oracle'
  },
  {
    category: 3,
    name: 'ASP.Net Core API',
    level: 'Intermediate',
    icon: 'devicon-plain:dotnetcore'
  },
  {
    category: 3,
    name: 'Node.js',
    level: 'Intermediate',
    icon: 'devicon-plain:nodejs-wordmark'
  },
  {
    category: 3,
    name: 'Power Automate Desktop',
    level: 'Basic',
    icon: 'simple-icons:powerautomate'
  },
  {
    category: 4,
    name: 'Microsoft SQL Server',
    level: 'Intermediate',
    icon: 'devicon-plain:microsoftsqlserver'
  },
  {
    category: 4,
    name: 'OracleDB',
    level: 'Basic',
    icon: 'solar:database-bold'
  },
  {
    category: 4,
    name: 'MongoDB',
    level: 'Basic',
    icon: 'devicon-plain:mongodb-wordmark'
  },
  {
    category: 5,
    name: 'IIS Server',
    level: 'Basic',
    icon: 'mdi:server'
  },
  {
    category: 6,
    name: 'Postman',
    level: 'Intermediate',
    icon: 'lineicons:postman'
  },
  {
    category: 6,
    name: 'SharePoint',
    level: 'Intermediate',
    icon: 'streamline-logos:microsoft-sharepoint-logo-solid'
  },
  {
    category: 6,
    name: 'Github',
    level: 'Basic',
    icon: 'mdi:github'
  },
  {
    category: 6,
    name: 'Jasper Report',
    level: 'Basic',
    icon: 'bx:bxs-report'
  },
  {
    category: 6,
    name: 'Figma',
    level: 'Basic',
    icon: 'solar:figma-bold-duotone'
  }
]

const filteredSkills = computed(() =>
  SkillLists.filter(skill => skill.category === activeCategoryId.value)
)

const levelColor = (level: ISkillType['level']) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-500'
    case 'Intermediate':
      return 'bg-orange-400'
    case 'Basic':
      return 'bg-red-400'
  }
}
</script>

<template>
  <div
    class="w-full min-h-screen bg-[var(--color-dark-blue)] pt-30 pb-20 text-center space-y-10"
  >
    <div class="w-full bg-[var(--color-gray-blue)]/50 p-10 space-y-5">
      <div class="flex justify-center">
        <img  
          class="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-[var(--color-orange)] pointer-events-none"
          :src="Profile" 
          alt="Profile picture"
        />
      </div>
      
      <div class="space-y-3">
        <div class="text-white">
          <h1 class="text-2xl">{{ t('about_me_title') }}</h1>
        </div>
        <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
      </div>
      
      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p class="indent-6">
          {{ t('about_me_text_1') }} <strong>{{ t('about_me_text_2') }}</strong> 👋
        </p>

        <p class="indent-6">
          {{ t('about_me_text_3') }}
        </p>

        <p class="indent-6">
          {{ t('about_me_text_4') }}
        </p>
      </div>
    </div>

    <div class="space-y-3">
      <div class="text-white">
        <h1 class="text-2xl">{{ t('about_me_education_title') }}</h1>
      </div>
      <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
    </div>

    <div class="max-w-4xl mx-auto px-10">
      <div class="flex flex-col sm:flex-row sm:items-start gap-6">
        <div class="max-w-[350px] h-[200px] flex justify-center sm:justify-end mx-auto">
          <img  
            class="rounded-md object-cover pointer-events-none"
            :src="TNI" 
            alt="TNI picture"
          />
        </div>

        <div class="space-y-3 text-white text-left pl-5 sm:pl-0">
          <p>
            <strong>{{ t('about_me_education_text_1') }}</strong>
          </p>
          <p>
            {{ t('about_me_education_text_2') }}
          </p>
          <p class="italic text-[var(--color-light-gray)]/80">
            {{ t('about_me_education_text_3') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
            <li>{{ t('about_me_education_text_4') }}</li>
            <li>{{ t('about_me_education_text_5') }}</li>
            <li>{{ t('about_me_education_text_6') }} <span class="italic font-thin">{{ t('about_me_education_text_7') }}</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[80%] mx-auto rounded-xl bg-[var(--color-gray-blue)]/50 p-10 space-y-5">
      <div class="space-y-3">
        <div class="text-white">
          <h1 class="text-2xl">{{ t('about_me_experience_title') }}</h1>
        </div>
        <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
      </div>

      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p>
          <strong>{{ t('about_me_experience_text_1') }}</strong>
        </p>
        <p>
          {{ t('about_me_experience_text_2') }}
        </p>
        <p class="italic text-[var(--color-light-gray)]/80">
          {{ t('about_me_experience_text_3') }}
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
          <li>{{ t('about_me_experience_text_4') }}</li>
          <li>{{ t('about_me_experience_text_5') }}</li>
          <li>{{ t('about_me_experience_text_6') }}</li>
        </ul>
      </div>

      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p>
          <strong>{{ t('about_me_experience_text_7') }}</strong>
        </p>
        <p class="italic text-[var(--color-light-gray)]/80">
          {{ t('about_me_experience_text_8') }}
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
          <li>{{ t('about_me_experience_text_9') }}</li>
          <li>{{ t('about_me_experience_text_10') }}</li>
        </ul>
      </div>
    </div>

    <div class="space-y-3">
      <div class="text-white">
        <h1 class="text-2xl">{{ t('about_me_skill_title') }}</h1>
      </div>
      <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
    </div>

    <section class="max-w-[1200px] mx-auto">
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button 
          v-for="category in CategorieLists" :key="category.id"
          @click="activeCategoryId = category.id"
          class="px-5 py-2.5 rounded-lg font-medium"
          :class="
            activeCategoryId === category.id
              ? 'bg-[var(--color-orange)] text-white border-[var(--color-orange)] font-medium'
              : 'bg-white/20 text-white border-white/30'
          "
        >
          {{ category.value }}
        </button>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 px-10 xl:px-0">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bg-[var(--color-gray-blue)] px-5 py-7 rounded-2xl text-center space-y-3"
        >
          <div class="flex items-center justify-center">
            <icon
              :name="skill.icon"
              size="50"
              class="text-[var(--color-orange)]"
            />
          </div>

          <h3 class="my-2 font-bold text-white">
            {{ skill.name }}
          </h3>

          <span
            class="inline-block px-3.5 py-1.5 rounded-full text-white text-sm font-bold"
            :class="levelColor(skill.level)"
          >
            {{ skill.level }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>