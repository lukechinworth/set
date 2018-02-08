import Vue from 'vue';
import Vuex from 'vuex';
import { deck, isSet } from './set';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedCardIds: [] as number[],
        deck,
    },
    mutations: {
        SET_SELECTED_CARD_IDS: (state, ids) => {
            state.selectedCardIds = ids;
        },
        CLEAR_SELECTED_CARD_IDS: state => {
            state.selectedCardIds = [];
        },
        SET_DECK: (state, ids) => {
            state.deck = ids;
        },
    },
    actions: {
        HANDLE_CARD_CLICK: ({ state, getters, commit }, cardId) => {
            const newSelectedCardIds = state.selectedCardIds.includes(cardId)
                ? state.selectedCardIds.filter(selectedCardId => selectedCardId !== cardId)
                : state.selectedCardIds.concat(cardId);

            commit('SET_SELECTED_CARD_IDS', newSelectedCardIds);

            if (getters.isSelectionASet) {
                commit('SET_DECK', state.deck.filter(id => !state.selectedCardIds.includes(id)));
            }

            if (getters.isSelectionFull) {
                commit('CLEAR_SELECTED_CARD_IDS');
            }
        },
    },
    getters: {
        board: ({ deck }) => deck.slice(0, 12),
        selectedCardIdsLength: ({ selectedCardIds }) => selectedCardIds.length,
        isSelectionFull: (state, { selectedCardIdsLength }) => selectedCardIdsLength === 3,
        isSelectionASet: ({ selectedCardIds }, { isSelectionFull }) => isSet(selectedCardIds),
    },
});
