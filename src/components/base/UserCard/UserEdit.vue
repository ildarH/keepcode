<script setup lang="ts">
import EditIcon from '@/components/icons/card/Edit.vue'
import PrintIcon from '@/components/icons/card/Print.vue'
import Trash from '@/components/icons/card/Trash.vue'
import { Button } from '@/components/ui/button'

type Props = {
  align?: 'horizontal' | 'vertical'
  showEdit?: boolean
  showPrint?: boolean
  showDelete?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex gap-[30px] items-end justify-around"
    :class="{ 'flex-col': align === 'vertical' }"
  >
    <template v-if="showEdit">
      <Button class="bg-white hover:bg-slate-100 px-2">
        <EditIcon class="w-[25px] h-[25px] text-gray-500" />
      </Button>
    </template>
    <template v-if="showPrint">
      <Button class="bg-white hover:bg-slate-100 px-2">
        <PrintIcon class="w-[25px] h-[25px] text-gray-500" />
      </Button>
    </template>
    <template v-if="showDelete">
      <Button class="bg-white hover:bg-slate-100 px-2">
        <Trash class="w-[25px] h-[25px] text-gray-500" />
      </Button>
    </template>
  </div>
</template>
