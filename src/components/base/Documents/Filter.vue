<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { DocumentFilters } from '@/@types/components'

type Props = {
  type: DocumentFilters
  options: Record<string, string>
  placeholder: string
}

defineProps<Props>()
defineEmits(['change'])
</script>

<template>
  <div class="flex flex-col">
    <div class="text-gray-500">{{ placeholder }}</div>
    <Select
      class="border-none"
      @update:modelValue="
        $emit('change', {
          type,
          value: $event
        })
      "
    >
      <SelectTrigger class="border-none !ring-0 !outline-none !p-0">
        <SelectValue class="text-blue-600 underline text-l" placeholder="Не выбрано" />
      </SelectTrigger>
      <SelectContent class="ring-0 outline-0">
        <SelectItem
          v-for="(value, key) in options"
          :value="`${key}`"
          :key="`${key}-select-value`"
          class="px-2"
        >
          {{ value.text || value }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
