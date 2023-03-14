<script>
import SectionHeader from './SectionHeader.vue';
import Button from './Button.vue';

export default {
    components: {
        SectionHeader,
        Button,
    },
    data() {
        return {
            businessInfos: [
                {
                    icon: 'fa-solid fa-diagram-project',
                    title: 'Audit & Assurance',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-briefcase',
                    title: 'Financial Advisory',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-chart-simple',
                    title: 'Analytics and M&A',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-plane',
                    title: 'Middle Marketing',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-earth-americas',
                    title: 'Legal Consulting',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-inbox',
                    title: 'Regulatory Risk',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                }
            ],
            sectionHeader: {
                class: 'dark',
                name: 'our business areas',
                hlTitleEnd: 'Services',
                title: 'Excellence in',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque! Temporibus, dicta aperiam voluptas quaerat explicabo libero fugiat. Provident recusandae veniam adipisci saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque!'
            }
        }
    }
}
</script>

<template>
    <section class="business">

        <div class="container1">

            <div class="row">

                <div class="col10">
                    <SectionHeader :sectionHeader="sectionHeader" />
                </div>

                <Button class="my-btn dark" :string="'see all'"></Button>

                <div v-for="(infoCard, i) in businessInfos" class="col4 card">

                    <div class="icons col12">
                        <font-awesome-icon class="icon" :icon="infoCard.icon" />
                        <font-awesome-icon class="arrow-icon" icon="fa-solid fa-arrow-right" />
                    </div>

                    <h3 class="h3">{{ infoCard.title }}</h3>
                    <p>{{ infoCard.lorem }}</p>
                </div>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.business {
    background-color: $light-section;
    padding: 130px 0 160px;

    .row {
        gap: 30px;

        .col4.card {
            flex-basis: calc(100%/3 - 60px/3);
            padding: 42px;
            background-color: white;
            border-radius: 10px;

            .icons {
                display: flex;
                justify-content: space-between;

                .icon {
                    color: $elf-green;
                    font-size: 45px;
                }

                .arrow-icon {
                    font-size: 22px;
                    color: rgba($color: $elf-green, $alpha: 0.5);
                    align-self: flex-start;
                }
            }


            .h3 {
                margin-top: 30px;
            }

            .h3,
            p {
                color: $shark;
            }

        }

        .my-btn {
            align-self: flex-end;
            margin-left: auto;
        }
    }

}
</style>
 