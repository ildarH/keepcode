import { reactive, ref, shallowRef, toRaw } from 'vue'
import { useApi } from '@/composables/useApi'
import { CONFIG } from '@/config'
import { generateMockDocument } from '@/lib/utils'
import { DocumentType, Extension, type Post, Status } from '@/@types'
import PdfIcon from '@/components/icons/files/Pdf.vue'
import DocIcon from '@/components/icons/files/Doc.vue'
import JpgIcon from '@/components/icons/files/Jpg.vue'
import XlsIcon from '@/components/icons/files/Xls.vue'
import type { DocumentFilters } from '@/@types/components'

const initialDocumentForm = {
  type: DocumentType.Contract,
  name: '',
  number: '',
  dateStart: '',
  dateEnd: '',
  notify: false,
  createTask: false,
  file: null
}

const { http } = useApi()

const documents = ref<Document[] | null>(null)
const filteredDocuments = ref<Document[] | null>(null)
const error = ref<string | null | unknown>(null)
const loading = ref<boolean>(false)
const documentTypeSelected = ref<DocumentType>()
const statusSelected = ref<Status>()
const sortSelected = ref<string>()
const documentForm = reactive({ ...initialDocumentForm })

async function fetchDocuments() {
  loading.value = true
  error.value = null
  try {
    const result = (await http.getDocuments()).slice(0, CONFIG.MAX_DOCUMENTS)
    documents.value = result.map((doc: Post) => generateMockDocument(doc))
    filteredDocuments.value = toRaw(documents.value)
  } catch (err) {
    console.error('fetchDocuments error: ', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

function applyFilter(payload: { type: DocumentFilters; event: { value: string } | null }) {
  if (payload.type === 'documents') {
    documentTypeSelected.value = payload.event ? payload.event.value : null
  } else if (payload.type === 'status') {
    statusSelected.value = payload.event ? payload.event.value : null
  }

  filteredDocuments.value = toRaw(documents.value)?.filter((doc) => {
    const matchesDocumentType = documentTypeSelected.value
      ? doc.type === documentTypeSelected.value
      : true

    const matchesStatus = statusSelected.value ? doc.status === statusSelected.value : true // Если фильтр не установлен, пропускаем проверку

    return matchesDocumentType && matchesStatus
  })
}

function applySort(payload: { type: DocumentFilters | null; event: { value: string } | null }) {
  sortSelected.value = payload.type
  if (payload.event?.value === 'dateStart') {
    filteredDocuments.value = documents.value?.sort(
      (a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime()
    )
  } else if (payload.event?.value === 'dateEnd') {
    filteredDocuments.value = documents.value?.sort(
      (a, b) => new Date(a.dateEnd).getTime() - new Date(b.dateEnd).getTime()
    )
  } else if (payload.event?.value === 'type') {
    filteredDocuments.value = documents.value?.sort((a, b) => a.type.localeCompare(b.type))
  } else if (payload.event?.value === 'status') {
    filteredDocuments.value = documents.value?.sort((a, b) => a.status.localeCompare(b.status))
  } else {
    filteredDocuments.value = documents.value
    sortSelected.value = null
  }
}

function resetDocumentForm() {
  Object.assign(documentForm, initialDocumentForm)
}

export const useDocuments = () => {
  const documentMap = ref<Record<DocumentType, string>>({
    [DocumentType.Contract]: 'Договор',
    [DocumentType.Certificate]: 'Справка',
    [DocumentType.Questionnaire]: 'Анкета'
  })

  const iconExtensionMap = shallowRef<Record<Extension, string>>({
    [Extension.pdf]: PdfIcon,
    [Extension.doc]: DocIcon,
    [Extension.docx]: DocIcon,
    [Extension.jpg]: JpgIcon,
    [Extension.xlsx]: XlsIcon,
    [Extension.xls]: XlsIcon
  })

  const statusMap = ref<Record<Status, string>>({
    [Status.Active]: 'Активен',
    [Status.Inactive]: 'Неактивен'
  })

  const sortOptions = ref({
    dateStart: 'По дате начала',
    dateEnd: 'По дате окончания',
    type: 'По типу документа',
    status: 'По статусу'
  })

  return {
    documents,
    filteredDocuments,
    error,
    loading,
    fetchDocuments,
    documentMap,
    iconExtensionMap,
    statusMap,
    applyFilter,
    applySort,
    sortOptions,
    documentTypeSelected,
    statusSelected,
    sortSelected,
    documentForm,
    resetDocumentForm
  }
}
