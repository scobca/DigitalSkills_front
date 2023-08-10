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
    <div class="arrow_down_container">
        <img src="@/assets/svg/arrow_icon_down.svg" alt="" class="arrow_down animate__animated animate__flash">
    </div>
    <div class="benefits_container animate__animated animate__backInUp animate__slower">
        <h1 class="benefits_header">Наши преимущества</h1>
        <div class="benefits">
            <div class="benefit_block">
                <div class="row-reverse">
                    <!--                    <img src="@/assets/svg/menu_icon.svg" alt="" class="img benefit_img">-->
                    <h4 class="benefit_title">Индивидуальный подход</h4>
                </div>
                <p class="benefit_body">
                    Мы понимаем, что каждая компания уникальна. Поэтому наши специалисты тщательно анализируют
                    потребности клиента и разрабатывают индивидуальные стратегии биллинга, которые максимально
                    соответствуют их бизнес-модели.
                </p>
            </div>
            <div class="benefit_block">
                <div class="row-reverse">
                    <!--                    <img src="@/assets/svg/menu_icon.svg" alt="" class="img benefit_img">-->
                    <h4 class="benefit_title">Технологические инновации</h4>
                </div>
                <p class="benefit_body">
                    Ковалёво Inc. всегда на шаг впереди, следя за последними тенденциями в области биллинга и внедряя
                    передовые технологии. Наша платформа предлагает современные инструменты для автоматизации биллинга,
                    управления подписками, анализа данных и многое другое.
                </p>
            </div>
            <div class="benefit_block">
                <div class="row-reverse">
                    <!--                    <img src="@/assets/svg/menu_icon.svg" alt="" class="img benefit_img">-->
                    <h4 class="benefit_title">Безопасность</h4>
                </div>
                <p class="benefit_body">
                    Мы придерживаемся высочайших стандартов безопасности, обеспечивая защиту конфиденциальных данных
                    наших клиентов. Мы постоянно обновляем наши системы и используем передовые методы шифрования, чтобы
                    гарантировать полную безопасность информации.
                </p>
            </div>
            <div class="benefit_block">
                <div class="row-reverse">
                    <!--                    <img src="@/assets/svg/menu_icon.svg" alt="" class="img benefit_img">-->
                    <h4 class="benefit_title">Прозрачность</h4>
                </div>
                <p class="benefit_body">
                    В Ковалёво Inc. мы ценим открытость и честность. Наши клиенты всегда могут рассчитывать на
                    прозрачные финансовые отчеты и детальные аналитические данные, чтобы принимать информированные
                    решения.
                </p>
            </div>
            <div class="benefit_block">
                <div class="row-reverse">
                    <!--                    <img src="@/assets/svg/menu_icon.svg" alt="" class="img benefit_img">-->
                    <h4 class="benefit_title">Поддержка клиентов</h4>
                </div>
                <p class="benefit_body">
                    Наша команда экспертов всегда готова оказать профессиональную поддержку клиентам. Мы ценим
                    долгосрочные отношения и стремимся помогать нашим клиентам достигать успеха в их бизнесе.
                </p>
            </div>
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

.benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 65rem;
    margin: 2rem;
}

.benefit_block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    width: 20rem;
    text-align: left;
    margin: 1rem 0;
}

.benefit_title {
    font-size: 1.5rem;
    letter-spacing: .25rem;
}

.benefit_body {
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

.animate__flash {
    --animate-duration: 2.5s;
}
</style>
