<script setup lang="ts">
import DocumentCard from '@/components/base/Documents/DocumentCard.vue'
import Menu from '@/components/base/Documents/Menu.vue'
import type { UserDocument } from '@/@types'

type Props = {
  documents: UserDocument[] | null
  loading: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col w-full">
    <Menu />
    <div v-if="!loading && documents" class="py-3.5 flex gap-x-16">
      <template v-for="(value, key) in documents" :key="`${key}-document`">
        <DocumentCard :document="value" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
