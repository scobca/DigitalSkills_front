<template>
    <div class="v_modal_container">
        <slot></slot>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
    name: 'VModal'
})
export default class VModal extends Vue {

}
</script>

<style scoped>
.v_modal_container {
    padding: 1rem;
}
</style>
