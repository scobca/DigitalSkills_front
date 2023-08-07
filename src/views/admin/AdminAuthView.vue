<template>
    <div class="container">
        <div class="registration" v-if="this.$route.name == 'signUp'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="@/assets/svg/arrow_icon.svg" alt="" class="img">
                    </router-link>
                    <h1 class="header"> Регистрация </h1>
                </div>
                <div class="inputs">
                    <VInput :placeholder="'Фамилия Имя Отчество'"
                            class="input"
                            v-model="name"
                    />
                    <VInput :placeholder="'Электронная почта'"
                            class="input"
                            v-model="email"
                    />
                    <VInput :placeholder="'Мобильный телефон'"
                            class="input"
                            v-model="phone"
                    />
                    <VInput :placeholder="'ID Администратора'"
                            class="input"
                            v-model="adminId"
                    />
                    <VInput :placeholder="'Пароль'"
                            class="input"
                            v-model="password"
                    />
                    <VInput :placeholder="'Повторите пароль'"
                            class="input"
                            v-model="doublePassword"
                    />
                </div>
                <div class="buttons_container">
                    <VButton class="button" @click="newUser"> Зарегистрироваться </VButton>
                    <p class="btn_text"> Уже есть аккаунт? <span @click="toLogin" class="action_text"> Войти </span></p>
                </div>
            </div>
        </div>
        <div class="login" v-if="this.$route.name == 'signIn'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="@/assets/svg/arrow_icon.svg" alt="" class="img">
                    </router-link>
                    <h1 class="header"> Войти </h1>
                </div>
                <VInput :placeholder="'Электронная почта'"
                        class="input"
                        v-model="email"
                />
                <VInput :placeholder="'Пароль'"
                        class="input"
                        v-model="password"
                />
                <div class="buttons_container">
                    <VButton class="button" @click="login"> Войти </VButton>
                    <p class="btn_text"> Ещё нет аккаунта? <span @click="toReg" class="action_text"> Регистрация </span></p>
                </div>
            </div>

        </div>
        <div class="profile" v-if="this.$route.name == 'account'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="@/assets/svg/arrow_icon.svg" alt="" class="img">
                    </router-link>
                    <h1 class="header"> Ваш профиль </h1>
                </div>
                <div class="credits_container">
                    <p class="credit"> {{this.name}} </p>
                    <p class="credit"> {{this.email}} </p>
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
    name: 'AdminAuthView',
    components: {VButton, VInput}
})
export default class AdminAuthView extends Vue {
    name: string | null = null
    email: string | null = null
    phone: number | null = null
    adminId: number | null = null
    password: string | null = null
    doublePassword: string | null = null

    clicked() {
        console.log('clicked')
    }
    toLogin() {
        this.$router.push({name: 'signIn'})
    }
    toReg() {
        this.$router.push({name: 'signUp'})
    }
    login() {
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('email')
        this.$router.push({name: 'account'})
    }
    async newUser() {
        const credits = {
            name: this.name,
            email: this.email,
            password: this.password,
        }

        this.$store.commit('addUser', credits)
        await this.getUserData()
        this.$router.push({name: 'profile'})
    }
    async getUserData() {
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('email')
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
    align-items: center;

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

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
}

.img {
    height: 1.3rem;
    margin-top: .6rem;
    cursor: pointer;
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

.inputs {
    margin-top: 1rem;
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
    margin: .6rem auto 1rem;
}

.button {
    width: 13rem;
    margin: 0 auto;
}
</style>
