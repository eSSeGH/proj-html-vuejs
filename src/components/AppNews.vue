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
            newsInfos: [
                {
                    image: '/img/news-1.jpg',
                    thumbText: 'Increasing creativity is possible for everyone'
                },
                {
                    image: '/img/news-2.jpg',
                    thumbText: 'Because market research is part of the business plan'
                },
                {
                    image: '/img/news-3.jpg',
                    thumbText: 'Working from home is now a trend'
                },
            ],
            sectionHeader: {
                darkMode: true,
                name: 'our editorial content',
                hlTitleEnd: 'News',
                title: 'Latest',
                paragraph: 'Every week we publish content about what is best in the business world'
            }
        }
    }
}
</script>

<template>
    <section class="news">

        <div class="container1">

            <div class="row">

                <div class="col10">
                    <SectionHeader :sectionHeader="sectionHeader" />
                </div>

                <Button class="my-btn dark" :string="'see all'"></Button>

                <div v-for="(infoCard, i) in newsInfos" class="col4 card">

                    <img class="card-img" :src="infoCard.image" alt="">

                    <div class="card-over">
                        <h3 class="h3">{{ infoCard.thumbText }}</h3>
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.news {
    background-color: $light-section;
    padding: 130px 0 160px;

    .row {
        gap: 30px;

        .col4.card {
            flex-basis: calc(100%/3 - 60px/3);
            border-radius: 10px;
            position: relative;

            .card-img {
                border-radius: 20px;
            }

            .card-over {
                background-color: rgba($color: black, $alpha: 0.5);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 98%;
                padding: 48px 20px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                h3 {
                    color: white;
                    text-align: center;
                    margin-bottom: 0;
                    font-weight: 700;
                    font-stretch: extra-condensed;
                    line-height: 26px;
                }
            }
        }

        .my-btn {
            align-self: flex-end;
            margin-left: auto;
        }
    }

}
</style>
 