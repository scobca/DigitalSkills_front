<template>
    <div class="container">
        <div class="registration" v-if="this.$route.name == 'registration'">
            <div class="active_container">
                <h1 class="header"> Регистрация </h1>
            </div>
        </div>
        <div class="login" v-if="this.$route.name == 'login'">
            <h1 class="header"> Вход </h1>

        </div>
        <div class="profile" v-if="this.$route.name == 'profile'">
            <h1 class="header"> Ваш профиль </h1>

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

    height: 100vh;
}

.active_container {
    width: 20rem;
    background: var(--container-bg-color);
}
</style>
