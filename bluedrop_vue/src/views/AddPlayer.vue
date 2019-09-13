<template>
    <div class="addplayer container">
      <br>
        <jumbotron message="Add Players"></jumbotron>
         <!-- upload a file -->
         <h3>Upload a .json file:</h3>
        <b-form-file
          v-model="file"
          enctype="multipart/form-data"
          accept=".json"
          ref="file"
           @change="uploadFile()"
          :state="Boolean(file)"
          placeholder="Choose a JSON file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <br>
        <b-button variant="success" @click="sendFile()" >Upload</b-button>
      </div>
</template>

<script>
import jumbotron from '../components/jumbotron';

export default {
  name: "addplayer",

  components: {
    jumbotron
    
  },
  data(){
    return{
      file: null,
      selectedFile: null
    }
  },
  methods:{
    //saving file data usign ref
    uploadFile(){
      this.selectedFile=this.$ref.file.files[0];
    },
    sendFile(){
      this.$http.post("http://bluedrop/api/player/add", selectedFile)
      .then(function(response){
        this.$router.push({path:"/"});
      })
      console.log("sending");
    }
  }

};
</script>

<style scoped>

</style>