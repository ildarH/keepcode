<script setup lang="ts">
import Filter from '@/components/base/Documents/Filter.vue'
import { useDocuments } from '@/composables/useDocuments'

const {
  documentMap,
  statusMap,
  sortOptions,
  documentTypeSelected,
  statusSelected,
  sortSelected,
  applyFilter,
  applySort
} = useDocuments()
</script>

<template>
  <div class="flex gap-x-20">
    <Filter
      :options="documentMap"
      v-model="documentTypeSelected"
      type="documents"
      placeholder="Тип документа"
      @change="applyFilter"
    />
    <Filter
      :options="statusMap"
      v-model="statusSelected"
      type="status"
      placeholder="Статус"
      @change="applyFilter"
    />
    <Filter
      :options="sortOptions"
      v-model="sortSelected"
      type="date"
      placeholder="Сортировать по"
      @change="applySort"
    />
  </div>
</template>

<style scoped></style>
