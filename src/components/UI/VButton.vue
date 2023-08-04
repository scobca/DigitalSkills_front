<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'VButton',
})
export default class VButton extends Vue {

}
</script>

<style scoped>
.btn {
    background: linear-gradient(200.42deg, #B275FF 13.57%, #C247ED 98.35%);
    box-shadow: none;
    border: none;
    border-radius: 0.5rem;
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem;
    max-height: fit-content;
}
</style>
