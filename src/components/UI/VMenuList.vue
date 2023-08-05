<template>
    <div class="main">
        <h1>Меню</h1>
        <div class="buttons">
            <p>shlkfgj</p>
            <p>slkfgj</p>
            <p>lksjgf</p>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'VMenuList',
})
export default class VMenuList extends Vue {

}
</script>

<style scoped>
.main {
    position: sticky;
    margin: auto 0;
    height: 90vh;
    width: 12vw;
    border-radius: 0 1rem 1rem 0;
    background-color: var(--container-bg-color);
}
</style>
