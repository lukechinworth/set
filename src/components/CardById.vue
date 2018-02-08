<template lang="pug">
    set-card(v-bind="card")
</template>

<script lang="ts">
import Vue from 'vue';
import SetCard from './SetCard.vue';
import { cardObjects, CardObject } from '../set';

export default Vue.extend({
    name: 'card-by-id',
    components: {
        SetCard,
    },
    props: {
        id: Number,
        selectedCardIds: Array as (() => number[]),
    },
    computed: {
        isSelected(): boolean {
            return this.selectedCardIds.includes(this.id);
        },
        cardObject(): CardObject {
            return cardObjects[this.id];
        },
        handleClick(): () => void {
            return this.$store.dispatch.bind(null, 'HANDLE_CARD_CLICK', this.id);
        },
        card() {
            return {
                ...this.cardObject,
                classes: {
                    selected: this.isSelected,
                },
                handleClick: this.handleClick,
            };
        },
    },
});
</script>
