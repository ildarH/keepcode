<script setup lang="ts">
import {
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

import { useDocuments } from '@/composables/useDocuments'
import { Button } from '@/components/ui/button'
import AddDocumentForm from '@/components/base/Forms/AddDocumentForm.vue'
const { documentMap, documentForm, resetDocumentForm } = useDocuments()

function updateFormValue(event: Event | File, field) {
  documentForm[field] = event
}

function submit() {}

function cancel() {
  resetDocumentForm()
}
</script>

<template>
  <DialogContent class="bg-white w-[650px]">
    <DialogHeader>
      <DialogTitle
        ><h2 class="font-bold text-2xl text-[#458AFB]">Добавить документ</h2></DialogTitle
      >
      <AddDocumentForm
        :document-map="documentMap"
        :document-form="documentForm"
        v-model:number="documentForm.number"
        v-model:name="documentForm.name"
        v-model:dateStart="documentForm.dateStart"
        v-model:dateEnd="documentForm.dateEnd"
        v-model:notify="documentForm.notify"
        v-model:createTask="documentForm.createTask"
        v-model:file="documentForm.file"
        @update:form-value="updateFormValue"
        @submit="submit"
      />
    </DialogHeader>

    <DialogFooter class="!justify-center">
      <Button class="bg-orange-400 hover:bg-orange-600" type="submit">Добавить документ</Button>
      <DialogClose as-child>
        <Button class="bg-gray-400 hover:bg-gray-600" @click="cancel">Отмена</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</template>
