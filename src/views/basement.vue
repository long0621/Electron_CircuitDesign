<template>
  <div>
    <!-- 架構選擇 -->
    
    <div class="d-flex">
      <v-col cols="6" sm="6">
        <v-select
          :items="items"
          label="Select Topology"
          v-model="topology"
          :flat="true"
        ></v-select>
      </v-col>
      <v-col cols="6" sm="6" class="d-flex align-center">
        <div class="my-2">
          <v-btn small color="primary">Save </v-btn>
        </div>
        <div class="my-2 ml-2">
          <v-btn small color="error">Clear</v-btn>
        </div>
      </v-col>
    </div>
    
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
      items: ['LLC', 'FBFS', 'PFC', 'Others'],
      topology:""
    }
  },
  methods:{
    // changeTopology(){ 
    //   console.log(this.topology);
    // }
  },
  created(){
    this.topology ="LLC";
  },
  watch: {
    topology(){
      const vm = this;
      if (vm.topology =="LLC") {
        
        this.$router.push("/LLC").catch(()=>{});
      }else{
        console.log("其他頁面尚未實作");
      }
      
    }
  },
}
</script>