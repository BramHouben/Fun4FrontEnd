import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import Login from '@/components/login.vue'
import vuetify from "vuetify"
import Vue from 'vue';
import Vuex from 'vuex'



const localVue = createLocalVue();

localVue.use(Vuex)

describe('Login.vue', () => {
    let store
    let actions
    let getters
    let wrapper

    beforeEach(() => {
        Vue.use(vuetify);
        store = new Vuex.Store({
            actions,
            getters,

        })
        wrapper = shallowMount(Login, {
            store,
            localVue
        });
    });

    // it('renders a vue instance', () => {
    //     expect(shallowMount(Login).isVueInstance()).toBe(true);
    // });
    // it('html should render correctly', () => {
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    it('renders', () => {

        expect(wrapper.exists()).toBe(true);
    });

    it('Bestaat h1', () => {

        expect(wrapper.find("h1").text().includes("Login")).toBe(true);
    });
    it('renders tags', () => {

        expect(wrapper.find("h1").text().includes("Login")).toBe(true);
    });

    it(' Button exists', () => {
        expect(wrapper.find('#buttonLogin').exists()).toBe(true);

    });


});