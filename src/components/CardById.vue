<template lang="pug">
    set-card(v-bind="card")
</template>

<script>
import SetCard from './SetCard.vue';
import { mapState, mapActions } from 'vuex';
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
        ...mapActions([
            'handleCardClick'
        ])
    },
    computed: {
        ...mapState([
            'selectedCardIds'
        ]),
        isSelected() {
            return this.selectedCardIds.includes(this.id);
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
