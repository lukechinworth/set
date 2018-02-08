<template lang="pug">
    #app
        card-by-id(v-for="cardId in board", :id="cardId", :selectedCardIds="selectedCardIds", :key="cardId")
</template>

<script lang="ts">
import Vue from 'vue';
import CardById from './components/CardById.vue';

export default Vue.extend({
    name: 'app',
    components: {
        CardById
    },
    computed: {
        board(): number[] {
            return this.$store.getters.board;
        },
        selectedCardIds(): number[] {
            return this.$store.state.selectedCardIds;
        },
    }
});
</script>
