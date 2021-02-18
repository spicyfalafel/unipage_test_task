<template>
    <span class="w-auto" v-bind:class="{'bg-success': symbol.isValid,
    'bg-danger': !symbol.isValid && symbol.typed}">{{symbol.symb}}</span>
</template>

<script>
    export default {
        name: "SymbolComponent",
        props: ['symbol'],
    }
</script>

<style scoped>

</style>
