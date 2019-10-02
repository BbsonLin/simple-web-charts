<template>
  <b-container>
    <h3 class="py-2">General Charts</h3>
    <b-row class="my-3">
      <b-col>
        <ChartIntroCard
          title="Line Charts"
          :icon="['fas', 'chart-line']"
          @click.native="routeTo('general-charts', 'line-charts')"
        />
      </b-col>
      <b-col>
        <ChartIntroCard
          title="Area Charts"
          :icon="['fas', 'chart-area']"
          @click.native="routeTo('general-charts', '#area-charts')"
        />
      </b-col>
      <b-col>
        <ChartIntroCard
          title="Column Charts"
          :icon="['fas', 'chart-bar']"
          @click.native="routeTo('general-charts', '#column-charts')"
        />
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col>
        <ChartIntroCard
          title="Pie Charts"
          :icon="['fas', 'chart-pie']"
          @click.native="routeTo('general-charts', '#pie-charts')"
        />
      </b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChartIntroCard from '@/components/ChartIntroCard.vue'

export default {
  components: {
    ChartIntroCard
  },
  methods: {
    routeTo(name, hash) {
      this.$router.push({ name, hash })
    }
  }
}
</script>

<style lang="scss" scoped></style>
