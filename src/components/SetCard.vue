<template lang="pug" functional>
    .set-card(:class="props.classes", @click="props.handleClick") {{ props.number }} {{ props.color }} {{ props.shape }} {{ props.fill }}
</template>

<style lang="scss">
.selected {
    font-weight: bold;
}
</style>
