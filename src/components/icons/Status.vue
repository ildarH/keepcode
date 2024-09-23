<script setup lang="ts">
type Color = 'red' | 'green'
defineProps<{ color: Color }>()
</script>

<template>
  <span class="w-[10px] h-[10px] rounded-sm" :class="`bg-${color}-600`" />
</template>
