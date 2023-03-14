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
            processInfos: [
                {
                    number: '01',
                    title: 'Collecting of Information',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur.',
                },
                {
                    number: '02',
                    title: 'Strategic Planning',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur.',
                },
                {
                    number: '03',
                    title: 'Assignment of Responsabilities',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur.',
                },
                {
                    number: '04',
                    title: 'Formatting Process',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur.',
                },
                {
                    number: '05',
                    title: 'Continuity Formalization',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur.',
                },
            ],
            sectionHeader: {
                class: 'dark',
                name: 'howw it works in practice',
                hlTitleStart: 'Process',
                title: 'Management',
                paragraph: 'We work with innovative methodologies to ensure that the entire reformatiing process is done from start to finish as planned. '
            }
        }
    }
}
</script>

<template>
    <section class="process">

        <div class="row">

            <div class="col12">
                <SectionHeader :sectionHeader="sectionHeader" />
            </div>

        </div>

        <div class="row container-process">

            <div v-for="(infoCard, i) in processInfos" class="col1-5 card">

                <div class="number">
                    <span>{{ infoCard.number }}</span>
                </div>

                <h3 class="h3">{{ infoCard.title }}</h3>
                <p>{{ infoCard.lorem }}</p>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.process {
    background-color: $light-section;
    padding: 130px 0 160px;
    background-color: white;
    text-align: center;

    .row {
        gap: 30px;

        .col12 {
            border-bottom: 5px solid $elf-green-light;
            padding-bottom: 80px;
        }
    }

    .row.container-process {
        gap: 30px;
        width: 1500px;
        margin: 0 auto;

        .col1-5.card {
            flex-basis: calc(100%/5 - 120px/5);
            margin-top: -26px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .number {
                background-color: $elf-green-light;
                height: 46px;
                aspect-ratio: 1;
                border-radius: 50%;
                line-height: 46px;

                span {
                    color: $elf-green;
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
    }

}
</style>
 