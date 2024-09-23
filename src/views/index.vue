<script setup lang="ts">
import UserCard from '@/components/base/UserCard/index.vue'
import Documents from '@/components/base/Documents/index.vue'
import AddDocumentModal from '@/components/Modals/AddDocument.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useUser } from '@/composables/useUser'
import { useDocuments } from '@/composables/useDocuments'
import { useModal } from '@/composables/useModal'

const { fetchUser, loading: isUserLoading, user } = useUser()
const { fetchDocuments, loading: isDocumentsLoading, filteredDocuments } = useDocuments()

fetchUser()
fetchDocuments()
</script>

<template>
  <div class="container mx-auto pt-6">
    <div class="flex flex-col gap-8">
      <UserCard :user="user" :loading="isUserLoading" />
    </div>
    <div class="mt-[30px] flex gap-[30px] justify-between overflow-x-scroll">
      <Documents :documents="filteredDocuments" :loading="isDocumentsLoading" />
    </div>
  </div>
</template>
