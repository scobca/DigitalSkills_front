<template>
    <div class="container">
        <div class="registration animate__animated animate__fadeInDown" v-if="this.$route.name == 'registration'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="../../assets/svg/arrow_icon_left.svg" alt="" class="img">
                    </router-link>
                    <h1 class="header"> Регистрация </h1>
                </div>
                <VInput :placeholder="'ФИО'"
                        class="input"
                        v-model="name"
                />
                <VInput :placeholder="'Электронная почта'"
                        class="input"
                        v-model="email"
                />
                <VInput :placeholder="'Пароль'"
                        class="input"
                        v-model="password"
                />
                <VInput :placeholder="'Повторите пароль'"
                        class="input"
                        v-model="doublePassword"
                />
                <div class="buttons_container">
                    <VButton class="button" @click="checkValid('reg')"> Зарегистрироваться</VButton>
                    <p class="btn_text"> Уже есть аккаунт? <span @click="this.$router.push({name: 'login'})"
                                                                 class="action_text"> Войти </span></p>
                </div>
            </div>
        </div>
        <div class="login animate__animated animate__fadeInDown" v-if="this.$route.name == 'login'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="../../assets/svg/arrow_icon_left.svg" alt="" class="img">
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
                    <VButton class="button" @click="loginUser"> Войти</VButton>
                    <p class="btn_text"> Ещё нет аккаунта? <span @click="this.$router.push({name: 'registration'})"
                                                                 class="action_text"> Регистрация </span></p>
                </div>
            </div>

        </div>
        <div class="profile animate__animated animate__fadeInDown" v-if="this.$route.name == 'profile'">
            <div class="active_container">
                <div class="row">
                    <router-link to="/">
                        <img src="../../assets/svg/arrow_icon_left.svg" alt="" class="img">
                    </router-link>
                    <h1 class="header"> Ваш профиль </h1>
                </div>
                <div class="credits_container">
                    <p class="credit"> {{ userName }} </p>
                    <p class="credit"> {{ userEmail }} </p>
                </div>
                <div class="buttons_container">
                    <VButton class="button" @click="logout"> Выйти из аккаунта</VButton>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";
import {AuthModel} from "@/api/models/AuthModel";

@Options({
    name: 'AuthView',
    components: {VButton, VInput}
})
export default class AuthView extends Vue {
    model = ''
    name = ''
    email = ''
    password = ''
    doublePassword = ''

    get userName() {
        return localStorage.getItem('name')
    }

    get userEmail() {
        return localStorage.getItem('email')
    }

    // checking valid of user data
    checkValid(request: string) {
        if (request == 'reg') {
            if (this.name == null)
                return null
            if (this.email == null || !this.email.includes('@'))
                return null
            if (this.password == null || this.doublePassword == null || this.password != this.doublePassword)
                return null

            this.newUser()
        }
        if (request == 'login') {
            if (this.email == null || !this.email.includes('@'))
                return null
            if (this.password == null)
                return null

            this.loginUser()
        }
        return null
    }

    newUser() {
        const auth = new AuthModel();
        const fd = new FormData();

        fd.append('full_name', this.name)
        fd.append('email', this.email)
        fd.append('password', this.password)

        auth.registerUser(fd)
            .then((res: any) => {
                console.log(res)

                // TODO make user reg - profile after new functions in API

                // if (res) {
                //     const user = res.data.data[0]
                //     const body = {
                //         id: user.id,
                //         email: user.email,
                //         full_name: user.full_name
                //     }
                //
                //     console.log(body)
                //     this.$store.commit('addUser', body)
                // }
            })
    }

    async loginUser() {
        const auth = new AuthModel();
        const fd = new FormData();

        fd.append('email', this.email)
        fd.append('password', this.password)

        await auth.loginUser(fd)
            .then((res: any) => {
                const user = res.data.data[0]
                const body = {
                    id: user.id,
                    email: user.email,
                    full_name: user.full_name
                }

                console.log(body)
                this.$store.commit('addUser', body)
            })

        this.$router.push({name: 'profile'})
    }

    logout() {
        localStorage.removeItem('name')
        localStorage.removeItem('email')

        this.$router.push('/')
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
