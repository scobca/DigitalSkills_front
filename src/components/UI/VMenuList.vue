<template>
    <div class="main">
        <h1 class="header">Меню</h1>
        <div class="buttons_container">
            <router-link to="" class="button">
                Главная
            </router-link>
            <router-link to="" class="button">
                Тарифы
            </router-link>
            <router-link to="" class="button">
                Профиль
            </router-link>
            <router-link to="" class="button">
                Выйти
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
    text-indent: 1rem;
    justify-content: flex-start;
    align-items: center;
}
</style>
