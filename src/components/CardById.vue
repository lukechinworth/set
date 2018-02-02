<template lang="pug">
    set-card(v-bind="card")
</template>

<script>
import SetCard from './SetCard.vue';
import { mapMutations } from 'vuex';
import { cardObjects } from '../set';

export default {
    name: 'card-by-id',
    components: {
        SetCard
    },
    props: {
        id: Number
    },
    methods: {
        ...mapMutations([
            'selectCard'
        ])
    },
    computed: {
        card() {
            return {
                // @TODO: bind card number here
                select: this.selectCard,
                ...cardObjects[this.id]
            };
        }
    }
};
</script>
