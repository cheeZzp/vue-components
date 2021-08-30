<template>
    <a-modal v-on="$listeners" v-bind="$props" v-model="sVisible">
        <slot name="content"></slot>
    </a-modal>
</template>

<script>
    import { default as modal } from 'ant-design-vue/es/modal/index'
    export default {
        name: "ZModal",
        mixins: [modal],
    }
</script>