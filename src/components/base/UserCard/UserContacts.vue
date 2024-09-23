<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { Status, type User } from '@/@types'
import StatusIcon from '@/components/icons/Status.vue'

type Props = {
  contact: {
    parentPhone: string
    personalPhone: string
    address: string
    birthday: string
    status: Extract<User, 'status'>
  }
}

const props = defineProps<Props>()

const { contact } = toRefs(props)

const contacts = reactive({
  column01: [
    {
      label: 'Статус',
      value: contact.value.status,
      class: 'basis-full'
    }
  ],
  column02: [
    {
      label: 'Телефон',
      value: contact.value.personalPhone
    },
    {
      label: 'Телефон родителей',
      value: contact.value.parentPhone
    }
  ],
  column03: [
    {
      label: 'Дата рождения',
      value: `${new Date(contact.value.birthday).toLocaleDateString()} (${getFullYearBetweenDates(contact.value.birthday) || '0'} лет)`
    },
    {
      label: 'Адрес',
      value: `${contact.value.address.city}, ${contact.value.address.street}`
    }
  ]
})

function getFullYearBetweenDates(date: string) {
  return new Date().getFullYear() - new Date(date).getFullYear()
}
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="flex items-end">
      <div
        v-for="item in contacts.column01"
        :key="`${item.label}-contacts`"
        class="flex items-start flex-col gap-1"
        :class="item?.class"
      >
        <span class="text-gray-500">{{ item.label }}</span>
        <div class="flex items-center gap-2.5">
          <StatusIcon :color="item.value === Status.Active ? 'green' : 'red'" />
          {{ item.value === Status.Active ? 'Активен' : 'Неактивен' }}
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div
        v-for="item in contacts.column02"
        :key="`${item.label}-contacts`"
        class="flex items-start flex-col gap-1"
        :class="item?.class"
      >
        <span class="text-gray-500">{{ item.label }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div
        v-for="item in contacts.column03"
        :key="`${item.label}-contacts`"
        class="flex items-start flex-col gap-1"
        :class="item?.class"
      >
        <span class="text-gray-500">{{ item.label }}</span>
        <span class="text-nowrap">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
