<template>
    <div class="main">
        <h1 class="header">Меню</h1>
        <div class="buttons_container">
            <router-link to="" class="button">
               <div class="block">
                   <img src="@/assets/svg/home_icon.svg" alt="" class="img">
                   <p> Главная </p>
               </div>
            </router-link>
            <router-link to="" class="button">
                <div class="block">
                    <img src="@/assets/svg/traffic_icon.svg" alt="" class="img">
                    <p> Тарифы </p>
                </div>
            </router-link>
<!--            TODO make it possible to display only one button (need checking auth + display 'profile' only if auth)-->
            <router-link to="" class="button" v-if="show">
                <div class="block">
                    <img src="@/assets/svg/profile_icon.svg" alt="" class="img">
                    <p> Профиль </p>
                </div>
            </router-link>
            <router-link to="" class="button" v-if="show">
                <div class="block">
                    <img src="@/assets/svg/login_icon.svg" alt="" class="img">
                    <p> Войти </p>
                </div>
            </router-link>
            <router-link to="" class="button" v-if="show">
                <div class="block">
                    <img src="@/assets/svg/logout_icon.svg" alt="" class="img">
                    <p> Выйти </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'VMenuList',
})
export default class VMenuList extends Vue {
    //TODO: 'show' boolean will be select one of the buttons to display it
    show = true
}
</script>

<style scoped>
.main {
    position: sticky;
    margin: auto 0;
    min-height: 15rem;
    min-width: 6rem;
    border-radius: 0 1rem 1rem 0;
    background-color: var(--container-bg-color);
}

.header {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-menu-color);
}

.buttons_container {
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: flex-start;
}

.button {
    text-decoration: none;
    border-bottom: 1px solid var(--border-menu-color);
    height: 2.25rem;
    width: 12vw;
    box-sizing: border-box;

    display: flex;
    text-indent: .5rem;
    justify-content: flex-start;
    align-items: center;
}

.block {
    display: flex;
    align-items: center;
}

.img {
    height: 1.1rem;
    margin-left: .5rem;
}
</style>
