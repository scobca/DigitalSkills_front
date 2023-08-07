<template>
    <div class="container_menu" v-if="show">
        <VMenuList/>
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
    <div class="container" v-if="!show">
        <div class="modal">
            <VModal>
                <router-view/>
            </VModal>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VModal from "@/components/UI/VModal.vue";
import VMenuList from "@/components/UI/VMenuList.vue";

@Options({
    name: 'App',
    components: {VMenuList, VModal}
})
export default class App extends Vue {
    get show() {
        return this.$store.getters.showMenu
    }
}
</script>

<style>
:root {
    --text-color: hsl(0, 25%, 86%);
    --container-bg-color: hsla(250, 26%, 18%, 0.7);
    --input-bg-color: hsla(250, 26%, 18%, 0.9);
    --border-menu-color: rgba(38, 34, 58, 0.9);
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
}

.container_menu {
    display: grid;
    grid-template-columns: min-content 1fr;
    height: 100vh;
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
