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
    <button>{{ string }}</button>
</template>

<style lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.my-btn.dark {
    font-size: 14px;
    height: 45px;
    padding: 14px 26px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 500;
    color: white;
    background-color: $elf-green;
    border: none;
}

.my-btn.light {
    font-size: 14px;
    height: 45px;
    padding: 14px 26px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 500;
    border: 1px solid $elf-green;
    color: $elf-green;
}
</style>
 