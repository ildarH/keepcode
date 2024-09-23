import { shallowRef } from 'vue'
import { CONFIG } from '@/config'
import Home from '@/components/icons/sidebar/Home.vue'
import Calendar from '@/components/icons/sidebar/Calendar.vue'
import Pupils from '@/components/icons/sidebar/Pupils.vue'
import Teacher from '@/components/icons/sidebar/Teacher.vue'
import Lesson from '@/components/icons/sidebar/Lesson.vue'
import Group from '@/components/icons/sidebar/Group.vue'

const ROUTE = CONFIG.ROUTE

export const useSidebar = () => {
  const icons = {
    home: Home,
    calendar: Calendar,
    pupils: Pupils,
    teachers: Teacher,
    lessons: Lesson,
    group: Group
  }

  const items = shallowRef([
    {
      title: 'Главная',
      icon: icons.home,
      to: ROUTE.HOME,
      isActive: false
    },
    {
      title: 'Расписание',
      icon: icons.calendar,
      to: ROUTE.SCHEDULE,
      isActive: false
    },
    {
      title: 'Ученики',
      icon: icons.pupils,
      to: ROUTE.PUPILS,
      isActive: true
    },
    {
      title: 'Преподаватели',
      icon: icons.teachers,
      to: ROUTE.TEACHERS,
      isActive: false
    },
    {
      title: 'Занятия',
      icon: icons.lessons,
      to: ROUTE.LESSONS,
      isActive: false
    },
    {
      title: 'Группы',
      icon: icons.group,
      to: ROUTE.GROUPS,
      isActive: false
    }
  ])

  return {
    items
  }
}
