<script>
import SectionHeader from './SectionHeader.vue';

export default {
    components: {
        SectionHeader,
    },
    data() {
        return {
            teamInfos: [
                {
                    imgUrl: '/img/team-1.jpg',
                    name: 'David Cooper',
                    role: 'cto & co-founder',
                },
                {
                    imgUrl: '/img/team-2.jpg',
                    name: 'Oliver Jones',
                    role: 'chief procurement',
                },
                {
                    imgUrl: '/img/team-3.jpg',
                    name: 'Emma Lopez',
                    role: 'chief marketing',
                },
                {
                    imgUrl: '/img/team-4.jpg',
                    name: 'T. Johnson',
                    role: 'ceo & president',
                },
            ],
            sectionHeader: {
                darkMode: false,
                name: 'we like what we do',
                hlTitleStart: 'Team',
                title: 'of Experts',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque! Temporibus, dicta aperiam voluptas quaerat explicabo libero fugiat. Provident recusandae veniam adipisci saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolor cumque!'
            }
        }
    }
}
</script>

<template>
    <section class="team">

        <div class="container1">

            <div class="row-grandfather">

                <div class="row col8-grandfather">

                    <div class="col12 section-header">
                        <SectionHeader :sectionHeader="sectionHeader" />
                    </div>


                    <div v-for="(infoCard, i) in teamInfos" class="row col6 infocard">

                        <div class="col4 infocard-img">
                            <img class="img" :src="infoCard.imgUrl" alt="">
                        </div>

                        <div class="col8 infocard-text">
                            <h3 class="h3">{{ infoCard.name }}</h3>

                            <span>{{ infoCard.role }}</span>

                            <div class="row text-social">
                                <ul style="display: contents;">
                                    <li class="social-icon-bg">
                                        <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook-f" />
                                    </li>
                                    <li class="social-icon-bg">
                                        <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
                                    </li>
                                    <li class="social-icon-bg">
                                        <font-awesome-icon class="social-icon" icon="fa-brands fa-linkedin-in" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col4-grandfather">

                    <div class="speech-card">

                        <h3 class="h3">President Speech</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cupiditate placeat itaque!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi laboriosam fugiat tempora
                            cupiditate earum ea cumque dolore ducimus incidunt.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos minima sit neque?</p>

                        <div class="speech-card-citation">
                            <strong class="citation-name">T. Johnson</strong>
                            <font-awesone-icon class="icon" icon="fa-solid fa-quote-right" />
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

.team {
    background-color: $dark-section;
    padding: 130px 0 160px;
    color: white;

    .row-grandfather {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        .col8-grandfather {
            flex-basis: calc(100%/3*2 - 30px/2);
            gap: 50px;

            .section-header {
                margin-bottom: 30px;
            }

            .infocard {
                flex-basis: calc(100%/2 - 50px/2);

                .infocard-img {

                    .img {
                        width: 100%;
                        border-radius: 10px;
                    }
                }

                .infocard-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding-left: 30px;

                    h3 {
                        margin-bottom: 0;
                    }

                    span {
                        text-transform: uppercase;
                        color: $corduroy;
                        font-weight: 400;
                    }

                    .text-social {
                        display: flex;
                        gap: 7px;

                        .social-icon-bg {
                            height: 40px;
                            aspect-ratio: 1;
                            background-color: $elf-green-dark;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .social-icon {
                                color: $elf-green;
                                font-size: 20px;
                            }
                        }
                    }
                }
            }

        }

        .col4-grandfather {
            flex-basis: calc(100%/3*1 - 30px/2);
            align-self: flex-end;

            .speech-card {
                background-color: $elf-green;
                padding: 30px;
                display: flex;
                flex-direction: column;

                h3,
                p {
                    margin-bottom: 30px;
                }

                .speech-card-citation {
                    display: flex;
                    justify-content: space-between;

                    .citation-name {}

                    .icon {
                        font-size: 15px;
                        align-self: flex-start;
                    }
                }
            }
        }
    }
}
</style>
 