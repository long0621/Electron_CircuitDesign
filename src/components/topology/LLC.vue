<template>
  <div class="py-2 pl-4">
    <div class="">
      <v-btn large color="indigo lighten-4" @click="activeOhm">Test: Ohm's law</v-btn>
      <v-btn large color="indigo lighten-4" class="ml-3">PFC Stage</v-btn>
    </div>

    <!-- dialog組件 -->
    <Ohm :dialog="openOhm" v-on:childMethod="inActiveOhm"></Ohm>
  </div>
</template>


<script>
import Ohm from '../dialog/ohm'

export default {
  name:"LLC",
  components: {
    Ohm
  },
  data() {
    return {
      openOhm:false
    }
  },
  methods:{
    activeOhm(){
      this.openOhm = true;
    },
    inActiveOhm(){
      this.openOhm = false;
    }
  }
}
</script>