<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { useBreadcrumbs } from '@/composables/useBreadcrumbs'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="`${index}-breadcrumb`"
        class="drop-shadow-md"
      >
        <BreadcrumbLink v-if="breadcrumb.href && !breadcrumb.isActive" :href="breadcrumb.href">
          {{ breadcrumb.text }}
        </BreadcrumbLink>
        <span v-else class="text-[#86939c]">{{ breadcrumb.text }}</span>
        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1"> / </BreadcrumbSeparator>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
