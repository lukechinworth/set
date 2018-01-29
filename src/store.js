import Vue from 'vue';
import Vuex from 'vuex';
import { baseN } from 'js-combinatorics';

Vue.use(Vuex);

// 4 attributes, each of 3 options.
// the deck is all possible combinations of those attributes, i.e. 3^4.

// each card is array of 4 numbers.
// The index is an attribute; the value is option.
const deck = baseN([0, 1, 2], 4).toArray();

console.table(deck);
export default new Vuex.Store({
    state: {
        cards: [],
        deck,
    },
    mutations: {

    }
});

