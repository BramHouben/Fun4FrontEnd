import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import Crud from '@/components/Crud.vue'
import Account from '@/components/Account.vue'
import vuetify from "vuetify"
import Vue from 'vue';
import Vuex from 'vuex'


const localVue = createLocalVue();

localVue.use(Vuex)


describe('Crud.vue', () => {
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
        wrapper = shallowMount(Crud, {
            store,
            localVue,
            propsData: {
                productsArray: []
            }
        });
    });

    it('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('renders', () => {

        expect(wrapper.exists()).toBe(true);
    });

    it('renders a vue instance', () => {
        wrapper.find("#addButtonProduct").trigger("click");
    });
})

describe('Account.vue', () => {
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
        wrapper = shallowMount(Account, {
            store,
            localVue,
            propsData: {
                ordersArray: []
            }
        });
    });

    it('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });


    it('renders page', () => {

        expect(wrapper.exists()).toBe(true);
    });
})