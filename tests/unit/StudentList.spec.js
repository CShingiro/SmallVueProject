import { mount } from '@vue/test-utils'
import StudentList from '@/components/StudentList.vue'

describe('StudentList.vue', () => {
  it('has a student grades list with only eight numbers', () => {
    const wrapper = mount(StudentList, {
      averageGrade()
    })
    expect(wrapper).toBeEqualToOrLessThan(100);
  })
})
