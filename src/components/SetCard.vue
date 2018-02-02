<template lang="pug">
    .set-card(:class="classes", @click="handleClick") {{ number }} {{ color }} {{ shape }} {{ fill }}
</template>

<script>

export default {
    name: 'set-card',
    props: {
        handleClick: Function,
        number: Number,
        color: String,
        shape: String,
        fill: String,
        isSelected: Boolean
    },
    computed: {
        classes() {
            return {
                selected: this.isSelected
            };
        }
    }
};
</script>

<style lang="scss">
.selected {
    font-weight: bold;
}
</style>
