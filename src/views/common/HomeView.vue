<template>
    <div class="container">
        <div class="greetings_container">
            <div class="header">
                <h1 class="header">Ковалёво inc. &mdash; </h1>
                <h3 class="header">биллинговая компания номер 1 в России</h3>
            </div>
            <div class="description">
                <p class="description_text">
                    Ковалёво Inc. – это инновационная биллинговая компания, специализирующаяся на предоставлении
                    высококачественных решений для автоматизации и оптимизации финансовых процессов различных бизнесов.
                    С нашим богатым опытом и экспертизой мы помогаем клиентам по всему миру управлять своими финансами
                    более эффективно.
                </p>
            </div>
        </div>
        <div class="carousel_container">
            <h2 class="header carousel_header">Наши достижения</h2>
            <Carousel/>
        </div>
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
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
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
