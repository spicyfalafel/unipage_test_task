<template>

    <div class="bg-danger" @click="handleClick()">
        <input ref="textInput" type="text" id="certificate-input" autofocus  v-model="text"/>
        <MainText :userTyping="text"/>
        <Stats/>
    </div>

</template>

<script>
    import MainText from "@/components/MainText";
    import Stats from "@/components/Stats";

    export default {
        name: 'Container',
        components: {MainText, Stats},
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
