<script setup lang="ts">
import Filters from '@/components/base/Documents/Filters.vue'
import { Button } from '@/components/ui/button'
import { DialogTrigger, Dialog } from '@/components/ui/dialog'
import AddDocumentModal from '@/components/Modals/AddDocument.vue'
import { useModal } from '@/composables/useModal'
const { hideModal } = useModal()
</script>

<template>
  <div class="flex justify-between items-center">
    <Filters />
    <Dialog class="w-96">
      <DialogTrigger asChild>
        <Button class="bg-orange-400 hover:bg-orange-600">Добавить документ</Button>
      </DialogTrigger>
      <AddDocumentModal @close="hideModal" />
    </Dialog>
  </div>
</template>

<style scoped></style>
