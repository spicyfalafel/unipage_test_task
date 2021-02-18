<template>

    <div class="bg-danger" @click="handleClick()">
        <input ref="textInput" type="text" id="certificate-input" autofocus  v-model="text"/>
        <TextHandler :userTyping="text"/>
    </div>

</template>

<script>
    import TextHandler from "@/components/TextHandler";

    export default {
        name: 'Container',
        components: {TextHandler},
        methods:{
            handleClick(){
                this.$refs.textInput.focus();
            }
        },
        data(){
            return {
                text: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin: 0 auto;
        padding: 10px;
    }
    #certificate-input{

    }
</style>
