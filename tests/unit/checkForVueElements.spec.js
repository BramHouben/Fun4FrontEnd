import {
  shallowMount
} from '@vue/test-utils'
import Register from '@/components/Register.vue'
import About from '@/views/About.vue'
import vuetify from "vuetify"
import Vue from 'vue';

describe('Register.vue', () => {
  //  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    //wrapper = shallowMount(Register);
  })
  it('renders a vue instance', () => {
    expect(shallowMount(Register).isVueInstance()).toBe(true);
  });
})

describe('About.vue', () => {
  //  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    //wrapper = shallowMount(Register);
  })
  it('renders a vue instance', () => {
    expect(shallowMount(About).isVueInstance()).toBe(true);
  });
})