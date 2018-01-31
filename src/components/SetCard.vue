<template lang="pug">
    .set-card(@click="select") {{ number }} {{ color }} {{ shape }} {{ fill }}
</template>

<script>

export default {
    name: 'set-card',
    props: {
        select: Function,
        number: Number,
        color: String,
        shape: String,
        fill: String
    },
};
</script>
