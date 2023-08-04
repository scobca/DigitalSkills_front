<template>
    <VModel>
        <router-view/>
    </VModel>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModel from "@/components/UI/VModel.vue";

@Options({
    name: 'App',
    components: {VModel}
})
export default class App extends Vue {

}
</script>

<style>
:root {
    --text-color: hsl(0, 33%, 90%);
    --container-bg-color: hsla(250, 26%, 18%, 0.6);
}
</style>
