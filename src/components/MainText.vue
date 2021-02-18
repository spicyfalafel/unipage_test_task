<template>
    <div id="txt" class="rounded bg-light w-50" ref="txtDiv">
        <SymbolComponent v-for="(c, i) in symbs" :key="i" :symbol="c"/>
    </div>
</template>

<script>
    import {getTextFromApi} from '@/logic/getText'
    import MySymbolModel from "@/logic/model/MySymbolModel";
    import SymbolComponent from "@/components/SymbolComponent";
    export default {

        name: "MainText",
        components: {SymbolComponent},
        props: ['userTyping'],
        watch: {
            userTyping: function (newVal) {
                this.handleTyping(newVal);
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
                        this.text = res.data[0];
                        console.log(this.text);
                        for (let i = 0; i < this.text.length; i++) {
                            const currentSymb = new MySymbolModel(i, this.text[i], false, false);
                            console.log(currentSymb);
                            this.symbs.push(currentSymb);
                        }
                    }).catch(e => {
                    console.log(e);
                });
            },
            handleTyping(newVal) {
                const lastChar =  newVal.slice(-1);
                const lastCharIndex = newVal.length-1;
                const isValid = lastChar === this.symbs[lastCharIndex].symb;
                console.log('this.symbs[lastCharIndex].symb', this.symbs[lastCharIndex].symb)
                console.log('lastchar', lastChar, 'index', lastCharIndex, 'isValid', isValid);
                this.symbs[lastCharIndex].isValid = isValid;
                this.symbs[lastCharIndex].typed = true;
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
