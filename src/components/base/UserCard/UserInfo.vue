<script setup lang="ts">
import { computed, shallowRef, toRefs } from 'vue'
import { Gender, type User } from '@/@types'
import telegram from '@/components/icons/social/Telegram.vue'
import whatsapp from '@/components/icons/social/WhatsApp.vue'
import viber from '@/components/icons/social/Viber.vue'

type Props = {
  name: string
  gender: Extract<User, 'gender'>
  social: User['social']
}

const props = defineProps<Props>()

const { social } = toRefs(props)

const socialLinks = computed(() => {
  return social.value ? Object.entries(social.value).map(([key, value]) => ({ key, value })) : null
})

const socialIcons = shallowRef({
  telegram,
  whatsapp,
  viber
})
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="title flex">
      <h2 class="text-3xl font-semibold text-[#458AFB] drop-shadow-lg">{{ name }}</h2>
      <img
        :src="gender === Gender.Female ? 'girl.png' : ''"
        :alt="name"
        class="w-[12px] h-[27px] ml-7"
      />
    </div>
    <div class="flex gap-7">
      <div class="flex gap-2.5">
        <a
          v-for="link in socialLinks"
          :key="link.key"
          :href="link.value"
          target="_blank"
          class="flex items-center gap-2"
        >
          <component :is="socialIcons[link.key]" class="w-6 h-6" />
        </a>
      </div>
      <RouterLink to="" class="text-[#458bfb] underline">Комментарии</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outline {
  -webkit-text-stroke: 0.01em black;
  font-stretch: 0%;
  //paint-order: stroke fill;
}
</style>
