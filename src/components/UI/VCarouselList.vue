<template>
    <div class="container">
        <div class="img_container">
            <img :src="require('@/assets/img/' + items.img)" alt="">
        </div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Options({
    name: 'VCarouselList',
})
export default class VCarouselList extends Vue {
    @Prop({})
    items!: {
        img: string
    }
}
</script>

<style scoped>
.img_container {
    min-width: 1193px;
}
</style>
