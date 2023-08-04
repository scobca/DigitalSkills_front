<template>
    <input :placeholder="placeholder"
           class="input"
           @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Options({
    name: 'VInput'
})
export default class VInput extends Vue {
    @Prop({})
    placeholder!: string
}
</script>

<style scoped>

.input {
    height: 1.5rem;
    width: inherit;
    border-radius: .5rem;


    text-align: center;
    color: var(--text-color);
    background-color: var(--input-bg-color);
}
</style>
