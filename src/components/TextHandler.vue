<template>
    <div>
        <Stats :symbols="symbs"/>
        <div id="txt" class="rounded bg-light w-50" ref="txtDiv">
            <SymbolComponent v-for="(c, i) in symbs" :key="i" :symbol="c"/>
        </div>
        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Congratulations!</p>
        </b-modal>
    </div>
</template>

<script>
    import {getTextFromApi} from '@/logic/getText'
    import MySymbolModel from "@/logic/model/MySymbolModel";
    import SymbolComponent from "@/components/SymbolComponent";
    import Stats from "@/components/Stats";

    export default {

        name: "TextHandler",
        components: {SymbolComponent, Stats},
        props: ['userTyping'],
        watch: {
            userTyping: function (newVal, oldVal) {
                this.handleTyping(newVal, oldVal);
            }
        },
        data() {
            return {
                text: '',
                symbs: []
            }
        },
        methods: {
            getText() {
                getTextFromApi()
                    .then(res => {
                        this.text = res.data[0].replaceAll("  ", " ");
                        for (let i = 0; i < this.text.length; i++) {
                            const currentSymb = new MySymbolModel(i, this.text[i], false, false);
                            this.symbs.push(currentSymb);
                        }
                    }).catch(e => {
                    console.log(e);
                });
            },
            handleTyping(newVal, oldValue) {
                if (newVal.length === this.text.length + 1) {
                    this.finishTyping();
                    return;
                }
                const typedSymb = newVal.slice(-1);
                if (newVal < oldValue) { // backspace
                    let erased = this.symbs[newVal.length];
                    let prevNext = this.symbs[newVal.length + 1];
                    prevNext.eraseSymbol();
                    erased.makeCurrent();
                } else { // symbol
                    let next = this.symbs[newVal.length];
                    let symbolToDiff = this.symbs[newVal.length - 1];
                    symbolToDiff.isValid = typedSymb === this.symbs[newVal.length - 1].symb;
                    symbolToDiff.typed = true;
                    symbolToDiff.current = false;
                    next.makeCurrent();
                }
            },

            finishTyping() {
                this.$bvModal.show("modal-1")
            }
        },
        created() {
            this.getText();
        }
    }
</script>

<style scoped>

    #txt {
        margin: 10px auto 0;
        font-size: 1.5rem;
        text-align: start;
        padding: 10px 10px 10px 15px;
    }

    #txt span {
        margin: 0 auto;
        padding: 0;
    }
</style>
