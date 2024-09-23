<script setup lang="ts">
import BaseSidebar from '@/components/base/Sidebar.vue'
import BaseHeader from '@/components/base/Header/index.vue'
import { CONFIG } from '@/config'
import { useBreadcrumbs } from '@/composables/useBreadcrumbs'
const ROUTE = CONFIG.ROUTE

const { setBreadcrumbs } = useBreadcrumbs()

setBreadcrumbs([
  { text: 'Главная', href: ROUTE.HOME },
  { text: 'Ученики', href: ROUTE.PUPILS },
  { text: 'Документы', href: ROUTE.GROUPS, isActive: true }
])
</script>

<template>
  <div class="layout">
    <BaseHeader class="header" />
    <BaseSidebar class="sidebar" />
    <RouterView class="content" />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 138px 1fr;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
  height: 100dvh;
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
</style>
