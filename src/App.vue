<template>
    <div class="container_menu" v-if="show">
        <div class="menu_list">
            <VMenuList/>
        </div>
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
    <div class="container main" v-if="!show">
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModal from "@/components/UI/VModal.vue";
import VMenuList from "@/components/UI/VMenuList.vue";
import VButton from "@/components/UI/VButton.vue";
import {LoginModel} from "@/api/LoginModel";

@Options({
    name: 'App',
    components: {VButton, VMenuList, VModal}
})
export default class App extends Vue {
    get show() {
        return this.$store.getters.showMenu
    }

    created() {
        const loginModel = new LoginModel()

        const body = {
            email: '123123@mail.ru',
            password: '123123123'
        }

        console.log(loginModel.signIn(body))
    }
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

.container_menu {
    display: grid;
    grid-template-columns: min-content 1fr;
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: sticky;
    top: 0;
}
</style>
