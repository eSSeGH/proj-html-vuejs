<script>
export default {
    data() {
        return {}
    }
}
</script>

<template>
    <div class="logo">
        <div class="hl-text">
            <span>
                NEX
            </span>
        </div>
        <div class="nhl-text">
            <span>
                GEN
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.logo {
    font-size: 20px;
    font-weight: 700;

    .hl-text {
        display: inline-block;
        color: $elf-green;
        background-color: rgba($color: $elf-green, $alpha: 0.3);
        border-radius: 25px 0 0 25px;
        height: 50px;
        padding-left: 33px;

        span {
            line-height: 50px;
            letter-spacing: 6px;
        }
    }

    .nhl-text {
        display: inline-block;
        color: black;
        padding-left: 3px;

        span {
            line-height: 50px;
            letter-spacing: 6px;
        }
    }
}
</style>
 