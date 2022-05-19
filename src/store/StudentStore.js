import { defineStore, acceptHMRUpdate } from 'pinia'
import EventService from '@/services/EventService.js'

export const useStudentStore = defineStore( "StudentStore", {
  state: () => ({
    students: []
  }),
  actions: {
    createStudents() {
      EventService.getStudents()
      .then(response => {
        this.students = response.data.students;
      })
      .catch(error => {
        throw error;
      });
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudentStore, import.meta.hot))
}
