<script setup lang="ts">
type Props = {
  required: boolean
  placeholder: string
}
const modelValue = defineModel()
defineProps<Props>()
</script>

<template>
  <div class="input">
    <input
      class="w-full border-b text-lg focus:outline-none"
      :class="{ required: required && !modelValue }"
      :required="required"
      v-model="modelValue"
    />
    <div class="placeholder">{{ placeholder }}<span class="ml-2">*</span></div>
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
}
.input input {
  padding: 2px;
}
.input input:valid + .placeholder {
  display: none;
}
.placeholder {
  position: absolute;
  pointer-events: none;
  top: 2px;
  bottom: 2px;
  left: 6px;
  margin: auto;
  color: #ccc;
}
.placeholder span {
  color: #fb923c;
}
</style>
