import Vue from 'vue';
import Vuex from 'vuex';
import { deck, isSet } from './set';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        set: [],
        deck
    },
    mutations: {
        handleCardClick: (state, cardId) => {
            if (state.set.includes(cardId)) {
                state.set = state.set.filter(setCardId => setCardId !== cardId);
                return;
            }

            state.set.push(cardId);
        }
    },
    getters: {
        board: ({ deck }) => deck.slice(0, 12),
        setLength: ({ set }) => set.length,
        isSetFull: (state, { setLength }) => setLength === 3,
        isSet: ({ set }, { isSetFull }) => isSetFull && isSet(set)
    }
});

