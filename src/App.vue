<template lang="pug">
    #app
        card-by-id(v-for="cardId in board", :id="cardId", :key="cardId")
</template>

<script>
import CardById from './components/CardById.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'app',
    components: {
        CardById
    },
    computed: {
        ...mapGetters([
            'board'
        ])
    }
};
</script>
