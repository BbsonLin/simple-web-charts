<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="justify-content-md-between" id="nav-collapse" is-nav>
          <b-navbar-brand href="#">Charts</b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item to="/">{{ $t('home') }}</b-nav-item>
            <b-nav-item to="/general-charts">{{
              $t('generalCharts')
            }}</b-nav-item>
            <b-nav-item to="/maps">{{ $t('maps') }}</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item-dropdown :text="$t($i18n.locale)" right>
              <b-dropdown-item @click="changeLanguage" data-lang="en">
                English
              </b-dropdown-item>
              <b-dropdown-item @click="changeLanguage" data-lang="zh_tw">
                繁體中文
              </b-dropdown-item>
              <b-dropdown-item @click="changeLanguage" data-lang="zh_cn">
                简体中文
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.dataset.lang
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
