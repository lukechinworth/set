<template lang="pug">
    #app
        set-card(v-for="card in board", v-bind="toCardProps(card)", :key="card")
</template>

<script>
import SetCard from './components/SetCard.vue';
import { mapGetters, mapMutations } from 'vuex';
import { cardObjects } from './set';

export default {
    name: 'app',
    components: {
        SetCard
    },
    methods: {
        toCardProps(card) {
            return {
                // @TODO: bind card number here
                select: this.selectCard,
                ...cardObjects[card]
            };
        },
        ...mapMutations([
            'selectCard'
        ])
    },
    computed: {
        ...mapGetters([
            'board'
        ])
    }
};
</script>
