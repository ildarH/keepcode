<script setup lang="ts">
import UserAvatar from '@/components/base/UserCard/UserAvatar.vue'
import UserInfo from '@/components/base/UserCard/UserInfo.vue'
import UserContacts from '@/components/base/UserCard/UserContacts.vue'
import UserEdit from '@/components/base/UserCard/UserEdit.vue'
import type { User } from '@/@types'
type Props = { user: User | null; loading: boolean }

defineProps<Props>()
</script>

<template>
  <div
    v-if="!loading && user"
    class="p-5 drop-shadow-lg bg-white rounded-[10px] grid grid-cols-[112px_0.5fr_1fr_40px] gap-[20px]"
  >
    <UserAvatar :image="user.image" :name="user.name" :gender="user.gender" />
    <UserInfo :name="user.name" :gender="user.gender" :social="user.social" />
    <UserContacts
      :contact="{
        parentPhone: user.phone.parent,
        personalPhone: user.phone.personal,
        address: user.address,
        birthday: user.birthday,
        status: user.status
      }"
    />
    <UserEdit align="vertical" :show-delete="true" :show-edit="true" />
  </div>
</template>
