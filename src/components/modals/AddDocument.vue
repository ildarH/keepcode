<script setup lang="ts">
import DatePicker from '@/components/base/DatePicker/index.vue'
import {
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import BaseInput from '@/components/base/Input/index.vue'
import { Plus } from 'lucide-vue-next'
import { useDocuments } from '@/composables/useDocuments'
import { Button } from '@/components/ui/button'
const { documentMap, documentForm } = useDocuments()

function updateFormValue(event, field) {
  documentForm[field] = event
}
</script>

<template>
  <DialogContent class="bg-white">
    <DialogHeader>
      <DialogTitle
        ><h2 class="font-bold text-2xl text-[#458AFB]">Добавить документ</h2></DialogTitle
      >
      <div class="flex flex-col gap-y-12 mt-12">
        <div class="flex items-start gap-x-2 text-lg">
          <Label class="text-lg">Тип документа: <span class="text-orange-400">*</span></Label>
          <RadioGroup
            :default-value="documentForm.type"
            @update:modelValue="updateFormValue($event, 'type')"
          >
            <div
              class="flex items-center space-x-2 text-lg"
              v-for="(value, key) in documentMap"
              :key="`${key}-radio`"
            >
              <RadioGroupItem :id="`${key}-option`" :value="key" />
              <Label :for="`${key}-option`" class="text-lg">{{ value }}</Label>
            </div>
          </RadioGroup>
        </div>
        <div class="flex flex-col gap-y-12">
          <BaseInput
            placeholder="Название документа"
            :required="true"
            v-model="documentForm.name"
          />
          <BaseInput placeholder="Номер" :required="true" v-model="documentForm.number" />
        </div>
        <div class="flex flex-col">
          <div class="text-lg flex gap-x-2.5 items-center">
            <span>Действует с:</span>
            <div class="w-[150px]">
              <DatePicker v-model="documentForm.dateStart" />
            </div>
            <span>по</span>
            <div class="w-[150px]">
              <DatePicker v-model="documentForm.dateEnd" />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="items-top flex gap-x-2">
            <Checkbox
              id="notify"
              :checked="documentForm.notify"
              @update:checked="updateFormValue($event, 'notify')"
            />
            <div class="grid gap-1.5 leading-none">
              <label
                for="notify"
                class="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Оповещать об окончании
              </label>
            </div>
          </div>
          <div class="items-top flex gap-x-2 mt-5">
            <Checkbox
              id="createTask"
              :checked="documentForm.createTask"
              @update:checked="updateFormValue($event, 'createTask')"
            />
            <div class="grid gap-1.5 leading-none">
              <label
                for="createTask"
                class="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Создавать задачу при окончании
              </label>
            </div>
          </div>
        </div>
        <div class="max-w-xl">
          <label
            class="flex justify-center w-full h-32 px-4 transition bg-gray-100 border-2 border-gray-200 border-solid rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none drop-shadow-md"
          >
            <span class="flex flex-col justify-center items-center space-x-2">
              <Plus class="w-8 h-8" />
              <span class="font-medium text-gray-600 text-center">
                Загрузить файл<br />
                <span class="text-gray-400"
                  ><span class="underline">Выберите файл</span> или перетащите сюда</span
                >
              </span>
            </span>
            <input
              type="file"
              name="file_upload"
              class="hidden"
              @change="updateFormValue($event, 'file')"
            />
          </label>
        </div>
      </div>
    </DialogHeader>

    <DialogFooter class="!justify-center">
      <Button class="bg-orange-400 hover:bg-orange-600">Добавить документ</Button>
      <DialogClose as-child>
        <Button class="bg-gray-400 hover:bg-gray-600">Отмена</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</template>
