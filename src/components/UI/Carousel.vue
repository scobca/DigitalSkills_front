<template>
    <v-card max-width="max-content">
        <v-carousel class="carousel" height="20rem" :cycle="true" :interval="4500">
            <template v-slot:prev="{ props }">
                <VButton @click="props.onClick" class="btn">
                    <img src="../../assets/svg/arrow_icon_left.svg" alt="" class="arrow">
                </VButton>
            </template>
            <template v-slot:next="{ props }">
                <VButton @click="props.onClick" class="btn">
                    <img src="../../assets/svg/arrow_icon_rignt.svg" alt="" class="arrow">
                </VButton>
            </template>
            <v-carousel-item>
                <img src="@/assets/img/cImg_1.png" alt="" class="img">
            </v-carousel-item>
            <v-carousel-item>
                <img src="@/assets/img/cImg_2.png" alt="" class="img">
            </v-carousel-item>
            <v-carousel-item>
                <img src="@/assets/img/cImg_3.png" alt="" class="img">
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script lang="ts">

import VButton from "@/components/UI/VButton.vue";
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'Carousel',
    components: {VButton}
})
export default class Carousel extends Vue {

}
</script>

<style scoped>
.img {
    height: 20rem;
}

.arrow {
    height: .75rem;
}

.btn {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>
