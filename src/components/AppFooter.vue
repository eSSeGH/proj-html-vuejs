<script>
import store from '../store';
import Button from './Button.vue';
import Logo from './Logo.vue';

export default {
    components: {
        Button,
        Logo
    },
    data() {
        return {
            store,
            about: [
                'The Company',
                'Institutional',
                'Social & Events',
                'Innovation',
                'Environment',
                'Technology'
            ],
            support: [
                'Responsability',
                'Terms of Use',
                'About Cookies',
                'Privacy Policies',
                'Accessibility',
                'Information'
            ]
        }
    }
}
</script>

<template>
    <footer>

        <section class="footer">

            <div class="container1">

                <div class="row">

                    <div class="col3 first-card">
                        <Logo />

                        <span>A Functional HTML Template for Corporate and Business.</span>

                        <ul>
                            <li class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                                <a>{{ store.telephone }}</a>
                            </li>
                            <li class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                                <a>{{ store.email }}</a>
                            </li>
                            <li class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                                <a>{{ store.address }}</a>
                            </li>
                        </ul>

                        <Button class="my-btn light" :string="'get in touch'"></Button>
                    </div>

                    <div class="col3 card">

                        <h3 class="h3">About</h3>

                        <ul style="display: contents;">
                            <li v-for="item in about" class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                                <a>{{ item }}</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col3 card">

                        <h3 class="h3">Services</h3>

                        <ul style="display: contents;">
                            <li v-for="item in store.services" class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                                <a>{{ item.title }}</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col3 card">

                        <h3 class="h3">Support</h3>

                        <ul style="display: contents;">
                            <li v-for="item in support" class="footer-link">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                                <a>{{ item }}</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>

        <section class="credits">

            <div class="container1 flex-y-center">
                <span>Enjoy the low price. We are tracking any intention of piracy. </span>

                <span>2020 NEXGEN is Proudly Powered by
                    <a href="">Codings</a>
                </span>
            </div>

        </section>

    </footer>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

footer .footer {
    background-color: $dark-section;
    padding: 130px 0 160px;
    color: white;

    .row {
        gap: 30px;

        .col3 {
            flex-basis: calc(100%/4 - 90px/4);
        }

        .col3.first-card {
            height: 330px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .my-btn.light {
                align-self: flex-start;
                background-color: rgba($color: white, $alpha: 0);
                transition: all 400ms;

                &:hover {
                    background-color: $elf-green;
                }
            }

            .footer-link {
                transition: color 300ms;

                &:hover {
                    color: $elf-green;
                }

                a {
                    margin-left: 7px;
                    line-height: 30px;
                    font-weight: 400;
                }
            }
        }

        .col3.card {
            padding: 48px 44px;
            background-color: $footer-card;
            border-radius: 20px;
            transition: all 400ms;

            &:hover {
                margin-top: -15px;
                margin-bottom: 15px;
            }

            .footer-link {
                transition: color 300ms;

                &:hover {
                    color: $elf-green;
                }

                a {
                    margin-left: 7px;
                    line-height: 30px;
                    font-weight: 400;
                }
            }
        }
    }

}

.credits {
    background-color: black;
    height: 90px;

    .container1 {
        height: 100%;
        justify-content: space-between;

        span {
            font-size: 12px;
            color: white;
            font-weight: 400;

            a {
                color: $elf-green;
            }
        }
    }
}
</style>
 