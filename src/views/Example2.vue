<template>
  <div class="home debug">
    <QUX :app="app" :config="config" :showDebug="true" v-model="payload"/>
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

import app from '../qux/app.json'

export default {
  name: 'Example 2',
  data: function () {
    return {
      app: app,
      payload: {
        name: 'Klaus',
        lastname: 'Schaefers'
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
