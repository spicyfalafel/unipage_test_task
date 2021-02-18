<template>
    <div class="rounded bg-light w-50 d-inline-flex">
        <div>speed: {{speed}}</div>
        <div>accuracy: {{100-mistakesRate*100 | round(2)}}%</div>

    </div>
</template>
<script>

    export default {
        name: "Stats",
        props: ['symbols'],
        filters: {
            round(value, decimals) {
                if (!value) {
                    value = 100;
                }

                if (!decimals) {
                    decimals = 0;
                }
                value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                return value;
            }
        },
        data() {
            return {
                speed: 0,
                totalTime: 0,
                lastTime: 0,
                keysTyped: 0,
                total: 0,
                mistakesRate: 0
            }
        },
        watch: {
            symbols: {
                handler(newVal) {
                    this.calculateSpeed(newVal);
                    this.calculateMistakes(newVal);
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
            },
            calculateMistakes(newSymbols) {
                const mistakes = newSymbols.filter(sym => !sym.isValid && sym.typed).length;
                const typed = newSymbols.filter(sym => sym.typed === true).length;
                this.mistakesRate = mistakes / typed;
                console.log(this.mistakesRate)
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
