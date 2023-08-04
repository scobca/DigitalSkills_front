<template>
    <div class="v_model_container">
        <slot></slot>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
    name: 'VModel'
})
export default class VModel extends Vue {

}
</script>

<style scoped>
.v_model_container {
    padding: 1rem;
}
</style>
