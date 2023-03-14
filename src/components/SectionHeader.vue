<script>

export default {
    props: {
        sectionHeader: {
            type: Object,
        }
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="section-name">{{ sectionHeader.name }}</div>

    <h2 class="h2" :class="sectionHeader.class">
        <span v-if="sectionHeader.hlTitleStart" class="hl-title" :class="sectionHeader.class">{{ sectionHeader.hlTitleStart
        }}</span>

        {{ sectionHeader.title }}

        <span v-if="sectionHeader.hlTitleEnd" class="hl-title" :class="sectionHeader.class">{{ sectionHeader.hlTitleEnd
        }}</span>
    </h2>

    <p :class="sectionHeader.class">{{ sectionHeader.paragraph }}</p>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/colors.scss' as *;

.section-name {
    margin-bottom: 25px;
}

.hl-title {
    padding: 14px;
    border-radius: 4px;
}

.hl-title.dark {
    background-color: $elf-green-light;
    color: $elf-green;
}

.hl-title.light {
    background-color: $elf-green-dark;
}

.h2 {
    margin-bottom: 30px;
}

.h2.light {
    font-size: 52px;
    color: white;
}

.h2.dark {
    font-size: 52px;
    color: $shark;
}

p.light {
    color: white
}

p.dark {
    color: $corduroy;
}
</style>
 