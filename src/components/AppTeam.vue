<script>
import SectionHeader from './SectionHeader.vue';

export default {
    components: {
        SectionHeader,
    },
    data() {
        return {
            networkInfos: [
                {
                    icon: 'fa-solid fa-award',
                    title: 'Tradition',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-lock',
                    title: 'Security',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-regular fa-pen-to-square',
                    title: 'Certificate',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    icon: 'fa-solid fa-graduation-cap',
                    title: 'Expertise',
                    lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                }
            ],
            sectionHeader: {
                class: 'light',
                name: 'about the network',
                hlTitleStart: 'The',
                title: 'Company',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque! Temporibus, dicta aperiam voluptas quaerat explicabo libero fugiat. Provident recusandae veniam adipisci saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque!'
            }
        }
    }
}
</script>

<template>
    <section class="network">

        <div class="container1">

            <div class="row">

                <div class="col6">
                    <SectionHeader :sectionHeader="sectionHeader" />
                </div>

                <div class="col6">

                    <div class="row info-cards">

                        <div v-for="(infoCard, i) in networkInfos" class="col6">
                            <h3 class="h3">
                                <font-awesome-icon class="icon" :icon="infoCard.icon" />
                                {{ infoCard.title }}
                            </h3>
                            <p>{{ infoCard.lorem }}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.network {
    background-color: $dark-section;
    padding: 130px 0 160px;
    color: white;

    .row {
        gap: 30px;

        .col6 {
            flex-basis: calc(100%/2 - 30px/2);
        }

        .row.info-cards {
            margin-right: 70px;
            color: white;

            .icon {
                color: $elf-green;
            }

        }
    }

}
</style>
 