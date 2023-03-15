<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header class="header1 flex-y-center">

        <div class="container1 flex-y-center">

            <div class="header1-info flex-y-center">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <span class="header1-link">Open Hours: Mon - Sat - 9:00 - 18:00</span>
            </div>

            <div class="header1-info flex-y-center">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <span class="header1-link">{{ store.telephone }}</span>
            </div>

            <div class="header1-info flex-y-center">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <span class="header1-link">{{ store.email }}</span>
            </div>

            <font-awesome-icon class="header1-info" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="header1-info" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="header1-info" icon="fa-brands fa-linkedin-in" />

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.header1 {
    height: 50px;
    background-color: $header-blue;
    color: white;
    font-size: 14px;
    font-family: sans-serif;
    color: $clody;

    .container1 {
        gap: 30px;

        .header1-info {
            gap: 7px;
            transition: color 300ms;

            &:hover {
                color: $elf-green;
            }
        }

        & :first-child {
            margin-right: auto;
        }
    }
}
</style>
 