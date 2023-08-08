<template>
    <div class="container_menu" v-if="show">
        <VMenuList/>
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
    <div class="container" v-if="!show">
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
    <Carousel/>
<!--    <v-card max-width="max-content">-->
<!--        <v-carousel class="carousel" height="20rem" :cycle="true" :interval="4500">-->
<!--            <template v-slot:prev="{ props }">-->
<!--                <VButton @click="props.onClick">-->
<!--                    <img src="@/assets/svg/arrow_icon.svg" alt="" class="arrow">-->
<!--                </VButton>-->
<!--            </template>-->
<!--            <template v-slot:next="{ props }">-->
<!--                <VButton @click="props.onClick">-->
<!--                    <img src="@/assets/svg/arrow_icon_revert.svg" alt="" class="arrow">-->
<!--                </VButton>-->
<!--            </template>-->
<!--            <v-carousel-item>-->
<!--                <img src="@/assets/img/cImg_1.png" alt="" class="img">-->
<!--            </v-carousel-item>-->
<!--            <v-carousel-item>-->
<!--                <img src="@/assets/img/cImg_2.png" alt="" class="img">-->
<!--            </v-carousel-item>-->
<!--            <v-carousel-item>-->
<!--                <img src="@/assets/img/cImg_3.png" alt="" class="img">-->
<!--            </v-carousel-item>-->
<!--        </v-carousel>-->
<!--    </v-card>-->
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModal from "@/components/UI/VModal.vue";
import VMenuList from "@/components/UI/VMenuList.vue";
import VButton from "@/components/UI/VButton.vue";
import Carousel from "@/components/UI/Carousel.vue";
import {LoginModel} from "@/api/LoginModel";

@Options({
    name: 'App',
    components: {Carousel, VButton, VMenuList, VModal}
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

<style>
:root {
    --text-color: hsl(0, 25%, 86%);
    --container-bg-color: hsla(250, 26%, 18%, 0.7);
    --input-bg-color: hsla(250, 26%, 18%, 0.9);
    --border-menu-color: rgba(38, 34, 58, 0.9);

    background: url("@/assets/img/bg_image.jpg") fixed;
    background-size: cover;
    height: 100vh;
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
}

.container_menu {
    display: grid;
    grid-template-columns: min-content 1fr;
    height: 100vh;
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel {
    border: 1px solid red;
}

.img {
    height: 20rem;
}

.arrow {
    height: 1rem;
    margin-top: .5rem;
}
</style>
