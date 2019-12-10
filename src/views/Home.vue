<template>
  <div class="home debug">
    <QUX :debug="hash" :config="config" :showDebug="true" v-model="payload"/>
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

export default {
  name: 'home',
  data: function () {
    return {
      hash: "a2aa10aSxK8OFl1m7qCr5ZH4QhVZu6ZqG86AqRhu2NabjXBPZFvfyJHkajA6", 
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
          key: 'id',
          prefix: 'qux'
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
