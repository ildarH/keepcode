import { ref } from 'vue'

export interface Breadcrumb {
  text: string
  href?: string
  isActive?: boolean
}

const breadcrumbs = ref<Breadcrumb[]>([])

export function useBreadcrumbs() {
  const addBreadcrumb = (breadcrumb: Breadcrumb) => {
    breadcrumbs.value.push(breadcrumb)
  }

  const setBreadcrumbs = (newBreadcrumbs: Breadcrumb[]) => {
    breadcrumbs.value = newBreadcrumbs
  }

  return {
    breadcrumbs,
    addBreadcrumb,
    setBreadcrumbs
  }
}
