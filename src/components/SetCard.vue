<template lang="pug">
    .set-card {{ card }}
</template>

<script>

export default {
    name: 'set-card',
    props: {
        card: Array
    }
    // props: {
    //     number: Number,
    //     color: String,
    //     shape: String,
    //     fill: String
    // },
};
</script>
