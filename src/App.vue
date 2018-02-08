<template lang="pug">
    #app
        card-by-id(v-for="cardId in board", :id="cardId", :selectedCardIds="selectedCardIds", :key="cardId")
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import CardById from './components/CardById.vue';

export default Vue.extend({
    name: 'app',
    components: {
        CardById,
    },
    computed: {
        ...mapGetters([
            'board',
        ]),
        ...mapState([
            'selectedCardIds',
        ]),
    },
});
</script>
