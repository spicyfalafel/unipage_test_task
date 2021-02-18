<template>
    <span class="w-auto" v-bind:class="{'bg-success text-white': symbol.isValid && symbol.typed,
    'bg-danger text-white': !symbol.isValid && symbol.typed && !symbol.current,
     'next': symbol.current && !symbol.typed}">{{symbol.symb}}</span>
</template>

<script>
    export default {
        name: "SymbolComponent",
        props: ['symbol'],
    }
</script>

<style scoped>

    .next {
        border: 2px solid grey;
    }
</style>
