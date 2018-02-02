<template lang="pug">
    set-card(v-bind="card")
</template>

<script>
import SetCard from './SetCard.vue';
import { mapState, mapMutations } from 'vuex';
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
            'handleCardClick'
        ])
    },
    computed: {
        ...mapState([
            'set'
        ]),
        isSelected() {
            return this.set.includes(this.id);
        },
        cardObject() {
            return cardObjects[this.id];
        },
        handleClick() {
            return this.handleCardClick.bind(null, this.id)
        },
        card() {
            return {
                isSelected: this.isSelected,
                handleClick: this.handleClick,
                ...this.cardObject
            };
        }
    }
};
</script>
