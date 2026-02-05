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
          <h1 class="text-2xl">About Me</h1>
        </div>
        <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
      </div>
      
      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p class="indent-6">
          Hi, I’m <strong>Brook</strong> 👋
        </p>

        <p class="indent-6">
          And I am a Web Developer specializing in Front-End development with experience in gathering client requirements, designing, and building responsive websites. I also assist with Back-End development when needed and am enthusiastic about learning new development tools.
        </p>

        <p class="indent-6">
          Recently, my work has centered around building low-code web applications using Power Apps Canvas and automating workflows with Power Automate Cloud. However, I am eager to strengthen my skills in traditional coding. I am now seeking new opportunities where I can continue to grow and take on new challenges in the software development field.
        </p>
      </div>
    </div>

    <div class="space-y-3">
      <div class="text-white">
        <h1 class="text-2xl">Education</h1>
      </div>
      <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
    </div>

    <div class="max-w-xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-start gap-6">
        <div class="w-full sm:w-[140px] flex justify-center sm:justify-end">
          <img  
            class="w-[160px] h-[160px] rounded-md object-cover border-[3px] border-[var(--color-orange)] pointer-events-none"
            :src="TNI" 
            alt="TNI picture"
          />
        </div>

        <div class="space-y-3 text-white text-left pl-10 sm:pl-0">
          <p>
            <strong>Bachelor of Computer Science Faculty of Science</strong>
          </p>
          <p>
            Thai-Nichi Institute of Technology
          </p>
          <p class="italic text-[var(--color-light-gray)]/80">
            Jun 2018 - May 2022 (3 years, 10 months)
          </p>
          <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
            <li>Information Technology</li>
            <li>GPAX: 3.2</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[80%] mx-auto rounded-xl bg-[var(--color-gray-blue)]/50 p-10 space-y-5">
      <div class="space-y-3">
        <div class="text-white">
          <h1 class="text-2xl">Experience</h1>
        </div>
        <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
      </div>

      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p>
          <strong>Web Developer</strong>
        </p>
        <p>
          A-HOST Co., Ltd.
        </p>
        <p class="italic text-[var(--color-light-gray)]/80">
          Mar 2022 - Present
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
          <li>Develop and implement web application.</li>
          <li>Technologies used : Power Apps Canvas, Power Automate, Vue.js, Nuxt.js, Oracle Apex, Oracle PL/SQL, HTML, CSS, JavaScript.</li>
        </ul>
      </div>

      <div class="max-w-3xl mx-auto space-y-3 text-white text-left">
        <p>
          <strong>Freelance</strong>
        </p>
        <p class="italic text-[var(--color-light-gray)]/80">
          Nov 2024 - Dec 2024
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[var(--color-light-gray)]/80">
          <li>Develop and implement new features to enhance the CMS functionality of an eCommerce website.</li>
          <li>Technologies used : Nuxt.js, Node.js, MongoDB.</li>
        </ul>
      </div>
    </div>

    <div class="space-y-3">
      <div class="text-white">
        <h1 class="text-2xl">Skill</h1>
      </div>
      <hr class="border-0 w-20 h-1 bg-[var(--color-orange)] mx-auto">
    </div>

    <section class="max-w-[1200px] mx-auto">
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button class="px-5 py-2.5 rounded-lg bg-[var(--color-orange)] text-white font-medium border border-[var(--color-orange)]">
          Frontend
        </button>
        <button class="px-5 py-2.5 rounded-lg bg-white/20 text-white border border-white/30">
          Backend
        </button>
        <button class="px-5 py-2.5 rounded-lg bg-white/20 text-white border border-white/30">
          Databases
        </button>
        <button class="px-5 py-2.5 rounded-lg bg-white/20 text-white border border-white/30">
          Tools
        </button>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        <!-- HTML -->
        <div class="bg-[var(--color-gray-blue)] px-5 py-7 rounded-2xl text-center space-y-3">
          <div class="flex items-center justify-center">
            <icon name="mdi:language-html5" size="50" class="text-[var(--color-orange)]" />
          </div>
          <h3 class="my-2 font-bold text-white">HTML</h3>
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-green-500 text-white text-sm font-bold">
            Advanced
          </span>
        </div>

        <!-- JS -->
        <div class="bg-[var(--color-gray-blue)] px-5 py-7 rounded-2xl text-center space-y-3">
          <div class="flex items-center justify-center">
            <icon name="mdi:language-javascript" size="50" class="text-[var(--color-orange)]" />
          </div>
          <h3 class="my-2 font-bold text-white">JavaScript</h3>
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-orange-400 text-white text-sm font-bold">
            Intermediate
          </span>
        </div>

        <!-- TS -->
        <div class="bg-[var(--color-gray-blue)] px-5 py-7 rounded-2xl text-center space-y-3">
          <div class="flex items-center justify-center">
            <icon name="mdi:language-typescript" size="50" class="text-[var(--color-orange)]" />
          </div>
          <h3 class="my-2 font-bold text-white">TypeScript</h3>
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-red-400 text-white text-sm font-bold">
            Basic
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import Profile from '~/assets/general/images/about-me/profile.jpg'
import TNI from '~/assets/general/images/about-me/tni.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>