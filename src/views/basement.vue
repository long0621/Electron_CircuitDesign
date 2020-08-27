<template>
  <div>
    <!-- 架構選擇 -->
    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        :items="items"
        label="Select Topology"
        v-model="topology"
        
      ></v-select>
    </v-col>
    <hr size="1" noshade="noshade" style="border:2px 	#AAAAAA solid;"/>
    <!-- 架構切換 -->
    <div style="margin-top:10px">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'basement',
  components: {},
  data() {
    return {
      items: ['LLC', 'FPFS', 'PFC', 'Others'],
      topology:""
    }
  },
  methods:{
    changeTopology(){ 
      console.log(this.topology);
    }
  },
  created(){
    this.topology ="LLC";
  },
  watch: {
    topology(){
      console.log(this.topology);
    }
  },
}
</script>