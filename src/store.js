import Vue from 'vue';
import Vuex from 'vuex';
import { deck } from './set';

Vue.use(Vuex);

console.table(deck);
export default new Vuex.Store({
    state: {
        cards: [],
        deck,
    },
    mutations: {

    }
});

