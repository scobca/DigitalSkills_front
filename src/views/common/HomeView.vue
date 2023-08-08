<template>
    <div class="container">
        <div class="greetings_container">
            <div class="header">
                <h1 class="header">Ковалёво inc. &mdash; </h1>
                <h3 class="header">биллинговая компания номер 1 в России</h3>
            </div>
            <div class="description">
                <p class="description_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque earum error repellendus totam? Consequatur cupiditate deserunt eaque expedita sint?</p>
                <p class="description_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque earum error repellendus totam? Consequatur cupiditate deserunt eaque expedita sint?</p>
            </div>
        </div>
        <div class="carousel_container">
<!--            <VCarousel/>-->
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VCarousel from "@/components/UI/Carousel.vue";

@Options({
    name: 'HomeView',
    components: {VCarousel},
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.container {
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.greetings_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}

.greetings_container {

}

.header {
    width: 20rem;
    text-align: left;
}

.description {
    width: 25rem;
    text-align: left;
    font-size: 1.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}
</style>
