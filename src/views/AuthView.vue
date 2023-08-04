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
                <div class="buttons_container">
                    <VButton class="button" @click="clicked"> Зарегистрироваться </VButton>
                    <p class="btn_text"> Уже есть аккаунт? <span @click="toLogin" class="action_text"> Войти </span></p>
                </div>
            </div>
        </div>
        <div class="login" v-if="this.$route.name == 'login'">
            <div class="active_container">
                <h1 class="header"> Войти </h1>
                <VInput :placeholder="'Электронная почта'"
                        class="input"
                        v-model="model"
                />
                <VInput :placeholder="'Пароль'"
                        class="input"
                        v-model="model"
                />
                <div class="buttons_container">
                    <VButton class="button" @click="clicked"> Войти </VButton>
                    <p class="btn_text"> Ещё нет аккаунта? <span @click="toReg" class="action_text"> Регистрация </span></p>
                </div>
            </div>

        </div>
        <div class="profile" v-if="this.$route.name == 'profile'">
            <div class="active_container">
                <h1 class="header"> Ваш профиль </h1>
                <div class="credits_container">
                    <p class="credit"> {{name}} </p>
                    <p class="credit"> {{email}} </p>
                </div>
                <div class="buttons_container">
                    <VButton class="button" @click="clicked"> Выйти из аккаунта </VButton>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";

@Options({
    name: 'AuthView',
    components: {VButton, VInput}
})
export default class AuthView extends Vue {
    model: string | null = null
    name: string | null = 'Your name'
    email: string | null = 'Your email'

    clicked() {
        console.log('clicked')
    }
    toLogin() {
        this.$router.push({name: 'login'})
    }
    toReg() {
        this.$router.push({name: 'registration'})
    }
}
</script>

<style scoped>
.container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.active_container {
    width: 25rem;
    display: flex;
    flex-direction: column;

    background: var(--container-bg-color);
    border-radius: 1rem;
}

.buttons_container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin: 2rem auto 1.5rem;
}

.credits_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem auto 1rem;
}

.credit {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 17rem;
    height: 2rem;
    border: transparent 1px solid;
    border-radius: .5rem;
    background-color: var(--container-bg-color);
}

.btn_text {
    font-size: 0.8rem;
    margin: 0.3rem auto;
}

.action_text {
    text-decoration: underline;
}

.action_text:hover {
    cursor: pointer;
}

.registration {
    display: flex;
    flex-direction: column;
}

.header {
    margin: 1.5rem auto 1rem;
}

.input {
    width: 20rem;
    height: 2rem;
    margin: .6rem auto;
}

.button {
    width: 13rem;
    margin: 0 auto;
}
</style>
