<template>
    <VModal>
        <router-view/>
    </VModal>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModal from "@/components/UI/VModal.vue";

@Options({
    name: 'App',
    components: {VModal}
})
export default class App extends Vue {

}
</script>

<style>
:root {
    --text-color: hsl(0, 25%, 86%);
    --container-bg-color: hsla(250, 26%, 18%, 0.7);
    --input-bg-color: hsla(250, 26%, 18%, 0.9);
}
</style>
