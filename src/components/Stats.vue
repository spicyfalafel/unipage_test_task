<template>
    <div class="rounded bg-light w-50">
        speed: {{speed}}
    </div>
</template>


<script>

    export default {
        name: "Stats",
        props: ['symbols'],
        data() {
            return {
                speed: 0,
                totalTime: 0,
                lastTime: 0,
                keysTyped: 0,
                total: 0,
            }
        },
        watch: {
            symbols: {
                handler(newVal) {
                    this.calculateSpeed(newVal);
                },
                deep: true
            }
        },
        methods: {
            calculateSpeed(newSymbols) {
                let now = new Date().getTime();

                if (this.lastTime !== 0) {
                    this.keysTyped = this.getTypedSymbols(newSymbols);
                    this.totalTime += now - this.lastTime;
                    this.speed = Math.round((this.keysTyped / this.totalTime) * 60000);
                }
                this.lastTime = now;
            },
            getTypedSymbols(symbolsArray) {
                return symbolsArray.filter(sym => sym.typed === true).length;
            }
        }
    }
</script>
<style scoped>
    div {
        margin: 10px auto 0;
        font-size: 1.5rem;
        text-align: start;
        padding: 10px 10px 10px 15px;
    }



</style>
