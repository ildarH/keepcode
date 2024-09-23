<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
const emits = defineEmits(['change'])

const isDragging = ref(false)
const documentForm = ref({ file: null })
const fileInput = ref<HTMLInputElement | null>(null)

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    documentForm.value.file = target.files[0]
    emits('change', documentForm.value.file)
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault()
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  isDragging.value = false

  if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
    documentForm.value.file = event.dataTransfer.files[0]

    if (fileInput.value) {
      fileInput.value.files = event.dataTransfer.files
      emits('change', documentForm.value.file)
    }
  }
}
</script>

<template>
  <div
    class="flex justify-center w-full h-32 px-4 transition bg-gray-100 border-2 border-gray-200 border-solid rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none drop-shadow-md"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    :class="{ 'border-blue-500': isDragging }"
  >
    <label class="flex flex-col justify-center items-center w-full h-full space-x-2">
      <Plus class="w-8 h-8" />
      <span class="font-medium text-gray-600 text-center">
        Загрузить файл<br />
        <span class="text-gray-400">
          <span class="underline">Выберите файл</span> или перетащите сюда
        </span>
      </span>
      <input type="file" class="hidden" @change="handleFileChange" ref="fileInput" />
    </label>
  </div>
</template>
