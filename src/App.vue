<template lang="pug">
    #app
        set-card(v-for="card, i in deck", :card="card", :key="i")
</template>

<script>
import SetCard from './components/SetCard.vue';
import { mapState } from 'vuex';

export default {
    name: 'app',
    components: {
        SetCard
    },
    computed: {
        ...mapState([
            'deck'
        ])
    }
};
</script>
