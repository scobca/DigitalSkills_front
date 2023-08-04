<template>
    <VModel>
        <router-view/>
    </VModel>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModel from "@/components/UI/VModel.vue";
import AuthView from "@/views/AuthView.vue";

@Options({
    name: 'App',
    components: {AuthView, VModel}
})
export default class App extends Vue {

}
</script>

<style>
:root {
    --text-color: #eedddd;
}
</style>
