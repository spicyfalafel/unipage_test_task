<template>

    <div class="bg-danger" @click="handleClick()">
        <header class="rounded bg-light w-50">Тренажер слепой печати</header>

        <input ref="textInput" type="text" id="certificate-input" autofocus v-model="text"/>
        <TextHandler :userTyping="text"/>

        <footer>
            <div class="rounded bg-light w-50">
                <p>Критерии оценки</p>
                <p>Соответствие ТЗ;</p>
                <p>Качество кода;</p>
                <p>Используемые технологии, арх. решения и т.п.</p>
            </div>
        </footer>
    </div>

</template>

<script>
    import TextHandler from "@/components/TextHandler";

    export default {
        name: 'Container',
        components: {TextHandler},
        methods: {
            handleClick() {
                this.$refs.textInput.focus();
            }
        },
        data() {
            return {
                text: ''
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 0 auto;
        padding: 10px;
    }

    /* copied */
    #certificate-input {
        position: absolute;
        left: 0;
        top: -10px;
        height: 1px;
        width: 100%;
        font-size: 16px;
        overflow: hidden;
        border: none;
        color: transparent;
        background-color: transparent;
        caret-color: transparent;
        outline: 0;
    }

    header {
        font-size: 2rem;
        margin: 0 auto;
    }
</style>
