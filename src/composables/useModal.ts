import { ref } from 'vue'

const isShowingModal = ref(false)

export const useModal = () => {
  function showModal() {
    isShowingModal.value = true
  }

  function hideModal() {
    isShowingModal.value = false
  }

  return {
    isShowingModal,
    showModal,
    hideModal
  }
}
