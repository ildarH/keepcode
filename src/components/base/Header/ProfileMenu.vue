<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Settings, LogOut } from 'lucide-vue-next'
import { useProfile } from '@/composables/useProfile'
import { Button } from '@/components/ui/button'
import { CONFIG } from '@/config'
const { loading, profile, fetchProfile, error } = useProfile()
fetchProfile()
</script>

<template>
  <div class="flex items-center gap-2.5">
    <Skeleton v-if="loading" :loading="loading" class="w-10 h-10 rounded-full" />
    <Avatar v-else>
      <AvatarImage :src="profile?.image" :alt="profile?.name" />
      <AvatarFallback>{{ profile?.name }}</AvatarFallback>
    </Avatar>
    <div class="flex">
      <Skeleton v-if="loading" :loading="loading" class="w-20 h-10" />
      <span v-else>{{ profile?.name }}</span>
    </div>
    <div class="flex items-center ml-14">
      <RouterLink
        :to="CONFIG.ROUTE.PROFILE"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-white hover:bg-slate-100"
      >
        <Settings class="text-black" />
      </RouterLink>
      <Button class="bg-white hover:bg-slate-100">
        <LogOut class="text-black" />
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
