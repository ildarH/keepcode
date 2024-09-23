<script setup lang="ts">
import Logo from '@/components/base/Logo.vue'
import { useSidebar } from '@/composables/useSidebar'

const { items } = useSidebar()
</script>

<template>
  <aside class="bg-[#458bfb] h-screen drop-shadow-xl">
    <RouterLink class="w-full px-5 py-3.5" to="/">
      <Logo class="w-full" />
    </RouterLink>
    <nav class="mt-10 flex flex-col gap-5">
      <div
        v-for="item in items"
        class="py-2 px-4 text-gray-200 flex flex-col items-center gap-1 hover:text-[#badefe] cursor-pointer"
        :class="{ 'bg-[#5696FF]': item.isActive }"
        :key="`${item.to}-sidebar-item`"
      >
        <component
          :is="item.icon"
          :key="`${item.to}-icon`"
          class="w-8 h-8 inline-block text-inherit"
        />

        <RouterLink :to="item.to">
          {{ item.title }}
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>
