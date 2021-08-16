<template>
    <a-steps v-bind="$attrs" v-on="$listeners">
        <a-step title="finished" description="this is a description"></a-step>
        <a-step title="In progress" description="this is a description"></a-step>
        <a-step title="Waiting" description="this is a description"></a-step>
    </a-steps>
</template>

<script>
    export default {
        name: "ZSteps",
    }
</script>