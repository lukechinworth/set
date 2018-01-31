import Vue from 'vue';
import Vuex from 'vuex';
import { deck } from './set';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        set: [],
        deck
    },
    mutations: {
        selectCard: (state, card) => {
            console.log(card)
            state.set.push(card);
        }
    },
    getters: {
        board: ({ deck }) => deck.slice(0, 12)
    }
});

