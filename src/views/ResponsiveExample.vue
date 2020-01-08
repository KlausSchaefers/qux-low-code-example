<template>
  <div class="home debug">
    <QUX :app="apps" :config="config" :showDebug="true" v-model="payload"/>
  </div>
</template>
<style lang="scss">
  .home {
    height: 100%;
  }
</style>

<script>

import Vue from "vue";
import QUX from 'qux-lowcode'
Vue.use(QUX);

import mobile from '../qux/mobile.json'
import desktop from '../qux/desktop.json'

export default {
  name: 'home',
  data: function () {
    return {
      apps: {
          mobile: mobile,
          desktop: desktop
      },
      config: {
        debug: {
          resize: false,
          logLevel: 2
        },
        css: {
          grid: true,
          justifyContentInWrapper: true
        },
        router: {
          key: 'screenName',
          prefix: 'example1'
        }
      },
      showPayload: false
    }
  },
  components: {
  },
  methods: {
    uploadImage (value, element, e) {
      console.debug('Home.methodA()', JSON.stringify(value), element, e)
    }
  }
}
</script>
