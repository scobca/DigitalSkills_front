<template>
    <div class="container main">
        <div class="greetings_container">
            <div class="header animate__animated animate__backInDown">
                <h1 class="header">Ковалёво inc. &mdash; </h1>
                <h3 class="header">биллинговая компания номер 1 в России</h3>
            </div>
            <div class="description">
                <p class="description_text">
                    Ковалёво Inc. – это инновационная биллинговая компания, специализирующаяся на предоставлении
                    высококачественных решений для автоматизации и оптимизации финансовых процессов различных бизнесов.
                </p>
            </div>
        </div>
        <div class="carousel_container">
            <h2 class="header carousel_header">Наши достижения</h2>
            <Carousel/>
        </div>
    </div>
<!--    TODO create new icon - arrow_down-->
    <div class="arrow_down_container">
        <img src="../../assets/svg/arrow_icon_left.svg" alt="" class="arrow_down animate__animated animate__flash">
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Carousel from "@/components/UI/Carousel.vue";

@Options({
    name: 'HomeView',
    components: {Carousel},
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.main {
    margin-top: 5rem;
}

.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.arrow_down_container {
    display: flex;
    justify-content: center;
    margin: 5rem 0 0 -15%;
}

.arrow_down {
    height: 2.5rem;
}

.greetings_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}

.carousel_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    width: 20rem;
    text-align: left;
}

.carousel_header {
    font-size: 2rem;
    margin-bottom: 1rem;
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
