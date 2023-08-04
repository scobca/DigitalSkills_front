<template>
    <div class="container">
        <div class="registration" v-if="this.$route.name == 'registration'">
            <div class="active_container">
                <h1 class="header"> Регистрация </h1>
                <VInput :placeholder="'ФИО'"
                        class="input"
                        v-model="model"
                />
                <VInput :placeholder="'Электронная почта'"
                        class="input"
                        v-model="model"
                />
                <VInput :placeholder="'Пароль'"
                        class="input"
                        v-model="model"
                />
                <VInput :placeholder="'Повторите пароль'"
                        class="input"
                        v-model="model"
                />
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
import VInput from "@/components/UI/VInput.vue";

@Options({
    name: 'AuthView',
    components: {VInput}
})
export default class AuthView extends Vue {
    model: string | null = null
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.active_container {
    width: 25rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;

    background: var(--container-bg-color);
    border-radius: 1rem;
}

.registration {
    display: flex;
    flex-direction: column;
}

.header {
    margin: 1rem;
}

.input {
    width: 20rem;
    height: 2rem;
    margin: .75rem auto;
}
</style>
