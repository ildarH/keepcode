<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import CardEdit from '@/components/base/UserCard/UserEdit.vue'
import StatusIcon from '@/components/icons/Status.vue'

import { DocumentType, Status, type UserDocument } from '@/@types'
import { toRefs } from 'vue'
import { useDocuments } from '@/composables/useDocuments'

const props = defineProps<{ document: UserDocument }>()
const { documentMap, iconExtensionMap } = useDocuments()
const { document } = toRefs(props)
</script>

<template>
  <Card class="hover:drop-shadow-lg transition-shadow flex p-5 gap-x-10">
    <CardHeader class="p-0">
      <div class="flex flex-col">
        <CardTitle
          >{{ documentMap[document.type] }}
          <template v-if="document.type === DocumentType.Contract"> №{{ document.id }} </template>
        </CardTitle>
        <CardDescription
          v-if="document.type === DocumentType.Contract"
          class="flex items-center gap-2.5"
        >
          <StatusIcon :color="document.status === Status.Active ? 'green' : 'red'" />
          {{ document.status === Status.Active ? 'Заключен' : 'Расторгнут' }}
        </CardDescription>
        <CardDescription v-else class="h-5">{{ document.date }}</CardDescription>

        <div v-if="document.type === DocumentType.Contract">
          <span class="text-gray-500">{{ document.dateStart }}</span
          >&nbsp;-&nbsp;
          <span class="text-gray-500">{{ document.dateEnd }}</span>
        </div>
        <div v-else class="h-6" />
        <CardEdit
          class="w-[135px] !gap-1 mt-2"
          align="horizontal"
          :show-edit="true"
          :show-delete="true"
          :show-print="true"
        />
      </div>
    </CardHeader>
    <CardContent class="p-[30px] bg-[#F2F5F8] rounded-xl">
      <div class="flex items-center">
        <component
          :is="iconExtensionMap[document.extension]"
          class="w-[58px] h-[58px] inline-block text-inherit"
        />
        <span>{{ document.name }}</span>
      </div>
    </CardContent>
  </Card>
</template>
