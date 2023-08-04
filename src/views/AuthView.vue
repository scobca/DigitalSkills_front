<template>
    <div class="container">
        <div class="registration" v-if="this.$route.name == 'registration'">
            <div class="active_container">
                <h1 class="header"> Регистрация </h1>
            </div>
        </div>
        <div class="login" v-if="this.$route.name == 'login'">
            <div class="active_container">
                <h1 class="header"> Вход </h1>
            </div>

        </div>
        <div class="profile" v-if="this.$route.name == 'profile'">
            <div class="active_container">
                <h1 class="header"> Ваш профиль </h1>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
    name: 'AuthView'
})
export default class AuthView extends Vue {

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;

    height: 95vh;
}

.active_container {
    width: 25rem;
    min-height: 30rem;

    background: var(--container-bg-color);

    border: transparent 1px solid;
    border-radius: 1rem;
}

.header {
    margin: 1rem;
}
</style>
