<template>
    <div class="container main">
        <div class="greetings_container">
            <div class="header greetings_main_header animate__animated animate__zoomIn">
                <h1 class="header">Ковалёво inc. &mdash; </h1>
                <h3 class="header">биллинговая компания номер 1 в России</h3>
            </div>
            <div class="description">
                <p class="description_text">
                    <b>Ковалёво Inc.</b> – это инновационная биллинговая компания, специализирующаяся на предоставлении
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
        <img src="../../assets/svg/arrow_icon_down.svg" alt="" class="arrow_down animate__animated animate__flash animate__delay-2s	">
    </div>
    <div class="benefits_container">
        <h1 class="benefits_header animate__animated animate__backInUp animate__slow animate__delay-2s">Наши преимущества</h1>
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

.benefits_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}

.benefits_header {
    margin: 0 0 0 -13%;
    letter-spacing: .5rem;
    font-size: 2.25rem;
    width: max-content;
    border-bottom: .25rem solid transparent;
    scale: 100%;
    transition-duration: 1s;
}

.benefits_header:hover {
    border-bottom: .25rem solid var(--text-color);
    scale: 110%;
}

.header {
    width: 20rem;
    text-align: left;
}

.carousel_header {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.greetings_main_header {
    scale: 110%;
    transition: .75s;
}

.greetings_main_header:hover {
    scale: 120%;
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

.animate__flash{
    --animate-duration: 2.5s;
}
</style>
