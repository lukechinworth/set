<template lang="pug" functional>
    .set-card(:class="props.classes", @click="props.handleClick") {{ props.number }} {{ props.color }} {{ props.shape }} {{ props.fill }}
</template>

<style scoped>
.selected {
    font-weight: bold;
}
</style>
