<script>

export default {
    props: {
        string: {
            type: String,
        }
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <button class="my-btn">{{ string }}</button>
</template>

<style lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;
</style>
 