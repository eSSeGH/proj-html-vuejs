<script>
import TextForm from './TextForm.vue';
import Button from './Button.vue';
import { initCustomFormatter } from 'vue';

export default {
    components: {
        TextForm,
        Button,
    },
    data() {
        return {
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            more: 'More Info',
        }
    }
}
</script>

<template>
    <section class="hero">

        <div class="container1">

            <div class="hero-body">

                <div class="section-name">
                    fusions & acquisitions
                </div>

                <h1 class="h1">
                    Insurance Consulting
                </h1>

                <div class="row">
                    <TextForm class="col6" :placeholder="name" />
                    <TextForm class="col6" :placeholder="email" />
                    <TextForm class="col6" :placeholder="phone" />
                    <TextForm class="col6" :placeholder="more" />

                    <Button class="my-btn dark col4" :string="'get in touch'"></Button>
                    <Button class="my-btn light col4" :string="'read more'"></Button>
                </div>

            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.hero {
    height: 864px;
    background-image: url(/img/bg-6.jpg);

    .hero-body {
        margin-left: 50%;
        padding: 242px 0 0 55px;

        .row {
            gap: 30px;

            .col6 {
                flex-basis: calc(50% - 30px/2);
            }
        }
    }

}
</style>
 