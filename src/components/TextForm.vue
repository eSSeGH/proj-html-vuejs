<script>

export default {
    props: {
        placeholder: {
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
    <input class="text-form" type="text" :placeholder="placeholder">
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.text-form {
    height: 50px;
    border-radius: 1px;
    background-color: #cbcfcf;
    border-style: none;
    padding: 15px;
}
</style>
 