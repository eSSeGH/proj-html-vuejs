<script>
import SectionHeader from './SectionHeader.vue';
import TextForm from './TextForm.vue';
import Button from './Button.vue';

export default {
    components: {
        SectionHeader,
        TextForm,
        Button,
    },
    data() {
        return {
            sectionHeader: {
                darkMode: false,
                name: 'newsletter',
                hlTitleStart: 'Know',
                title: 'First',
                paragraph: 'Follow closely and receive content about company and the news of the current market.'
            }
        }
    }
}
</script>

<template>
    <section class="newsletter">

        <div class="container1">

            <div class="row">

                <div class="col6">
                    <SectionHeader :sectionHeader="sectionHeader" />
                </div>

                <div class="col6 form">

                    <TextForm class="newsletter-form" :placeholder="'Name'" />
                    <TextForm class="newsletter-form" :placeholder="'Email'" />

                    <Button class="my-btn dark" :string="'subscribe'"></Button>

                </div>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.newsletter {
    background-image: url(/img/bg-1.jpg);
    background-position: center;
    padding: 130px 0 160px;
    color: white;

    .row {
        gap: 30px;

        .col6 {
            flex-basis: calc(100%/2 - 30px/2);
        }

        .form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .newsletter-form {
                background-color: rgba($color: #cbcfcf, $alpha: 0.5);
                border-radius: 5px;
            }

            .my-btn.dark {
                align-self: flex-start;
            }
        }
    }

}
</style>
 