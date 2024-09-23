<script setup lang="ts">
import BreadCrumbs from '@/components/base/Header/BreadCrumbs.vue'
import ProfileMenu from '@/components/base/Header/ProfileMenu.vue'
</script>

<template>
  <header class="bg-white">
    <div class="flex justify-between items-center container mx-auto h-full">
      <BreadCrumbs />
      <ProfileMenu />
    </div>
  </header>
</template>
