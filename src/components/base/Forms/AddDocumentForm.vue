<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import DropZone from '@/components/base/Forms/DropZone.vue'
import BaseInput from '@/components/base/Input/index.vue'
import DatePicker from '@/components/base/DatePicker/index.vue'
type Props = {
  documentMap: Record<string, string>
  documentForm: Record<string, any>
}
defineProps<Props>()
const emits = defineEmits(['submit', 'update:formValue'])

const number = defineModel('number')
const name = defineModel('name')
const dateStart = defineModel('dateStart')
const dateEnd = defineModel('dateEnd')
const notify = defineModel('notify')
const createTask = defineModel('createTask')

function update(event, type) {
  emits('update:formValue', event?.target?.value || event, type)
}
</script>

<template>
  <form @submit.prevent="$emit('submit')">
    <div class="flex flex-col gap-y-12 mt-12">
      <div class="flex items-start gap-x-2 text-lg">
        <Label class="text-lg">Тип документа: <span class="text-orange-400">*</span></Label>
        <RadioGroup :default-value="documentForm.type" @update:modelValue="update($event, 'type')">
          <div
            class="flex items-center space-x-2 text-lg"
            v-for="(value, key) in documentMap"
            :key="`${key}-radio`"
          >
            <RadioGroupItem
              :id="`${key}-option`"
              :value="key"
              class="border-blue-400 text-blue-400"
            />
            <Label :for="`${key}-option`" class="text-lg">{{ value }}</Label>
          </div>
        </RadioGroup>
      </div>
      <div class="flex flex-col gap-y-12">
        <BaseInput placeholder="Название документа" :required="true" v-model="name" />
        <BaseInput placeholder="Номер" :required="true" v-model="number" />
      </div>
      <div class="flex flex-col">
        <div class="text-lg flex gap-x-2.5 items-center">
          <span>Действует с:</span>
          <div class="w-[150px]">
            <DatePicker v-model="dateStart" />
          </div>
          <span>по</span>
          <div class="w-[150px]">
            <DatePicker v-model="dateEnd" />
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="items-top flex gap-x-2">
          <Checkbox
            id="notify"
            class="border-blue-400 text-blue-400"
            :checked="notify"
            @update:checked="update($event, 'notify')"
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
            class="border-blue-400 text-blue-400"
            :checked="createTask"
            @update:checked="update($event, 'createTask')"
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
      <div v-if="documentForm.file">
        {{ documentForm.file?.name || documentForm.file }}
      </div>
      <DropZone v-else @change="update($event, 'file')" />
    </div>
  </form>
</template>

<style scoped></style>
