<template>
    <div class="container">
        <v-carousel-list v-for="item in items_data"
                         :key="item.id"
        />
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import VCarouselList from "@/components/UI/VCarouselList.vue";
import {Prop} from "vue-property-decorator";

@Options({
    name: 'VCarousel',
    components: {VCarouselList},
})
export default class VCarousel extends Vue {
    @Prop({default: () => []})
    items_data!: {
        id: number
    }
}
</script>

<style scoped>
.container {
    display: flex;
    height: 663px;
    width: 1193px;
    border: 1px solid red;
}
</style>
