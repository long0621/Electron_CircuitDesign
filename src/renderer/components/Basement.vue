<template>
  <div id="wrapper">
    123
  </div>
</template>

<script>
  import { remote } from 'electron';
  import {shell} from 'electron';
  import path from 'path';

  export default {
    name: 'basement',
    //components: { SystemInformation },
    data() {
      return {
        filePath:""
      }
    },
    methods: {
      // open (link) {
      //   this.$electron.shell.openExternal(link)
      // }
    },
    created(){
      //this.filePath = remote.app.getAppPath();
      if (remote.app.getName() == "Electron") {//electron表示測試環境
        //shell.openItem('electron-vue Setup 0.0.1.exe')
      }else{


      }
    }
  }
</script>

<style>

</style>
