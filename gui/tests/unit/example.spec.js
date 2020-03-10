import {
  shallowMount
} from '@vue/test-utils'
import Navbar from '@/components/MainPage.vue'

describe('MainPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Navbar, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})