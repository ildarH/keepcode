<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Gender } from '@/@types'

const props = defineProps<{
  name: string
  image: string
  gender: Gender
}>()

const { name, image, gender } = toRefs(props)

const fallbackImage = {
  male: '',
  female: 'girl-avatar.svg'
}

const currentFallbackImage = computed(() => {
  return fallbackImage[gender.value || 'female']
})
</script>

<template>
  <Avatar class="w-28 h-28">
    <AvatarImage
      class="w-14 h-16 !object-contain"
      :src="image || currentFallbackImage"
      :alt="name"
    />
  </Avatar>
</template>
