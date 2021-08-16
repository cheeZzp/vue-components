<template>
    <a-button v-on="$listeners" v-bind="$attrs" >
        <slot></slot>
    </a-button>
</template>

<script>
    export default {
        name: "ZButton"
    }
</script>