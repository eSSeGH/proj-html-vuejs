<script>
import Button from './Button.vue';
import Logo from './Logo.vue';

export default {
    components: {
        Button,
        Logo,
    },
    data() {
        return {
            string: 'get in touch',
        }
    },
    methods: {
        handleScroll(event) {
            const headerEl = document.querySelector('.header2')
            headerEl.style.transition = 'background-color 1s'
            headerEl.style.backgroundColor = 'white'
            headerEl.style.boxShadow = '0 10px 15px -15px lightgrey'
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>

<template>
    <header class="header2 flex-y-center">

        <div class="container1 flex-y-center">

            <div class="header2-logo flex-y-center">
                <h1 class="header2-logo">
                    <Logo />
                </h1>
            </div>

            <nav class="header2-nav flex-y-center">
                <ul style="display: contents;">
                    <li class="nav-link">home</li>
                    <li class="nav-link">about</li>
                    <li class="nav-link">services</li>
                    <li class="nav-link">process</li>
                    <li class="nav-link">team</li>
                    <li class="nav-link">blog</li>
                </ul>
            </nav>

            <Button class="my-btn dark" :string="string"></Button>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.header2 {
    height: 84px;
    font-size: 14px;
    font-family: sans-serif;

    .container1 {
        gap: 35px;

        .header2-logo {

            h1 {
                font-size: 14px;
                letter-spacing: 0.2rem;
            }
        }

        .header2-nav {
            gap: 35px;
            transition: color 300ms;
            text-transform: uppercase;
            font-size: 14px;

            .nav-link {
                transition: color 300ms;

                &:hover {
                    color: $elf-green;
                }
            }
        }

        & :first-child {
            margin-right: auto;
        }
    }
}
</style>
 