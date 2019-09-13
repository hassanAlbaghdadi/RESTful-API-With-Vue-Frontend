<template>
    <div class="player container">
        <br>
        <jumbotron message="Player Details"></jumbotron>
        <!-- player details -->
        <b-button id="button" variant="primary" :to="'/'">Go Back</b-button>
        <b-button id="button" variant="danger" @click="deletePlayer(player.id)">Delete</b-button>
        <b-list-group>
            <h4>Player Information:</h4>
            <b-list-group-item variant="dark">ID: {{player.id}}</b-list-group-item>
            <b-list-group-item>Name: {{player.name}}</b-list-group-item>
            <b-list-group-item>Age: {{player.age}}</b-list-group-item>
            <h4>Player Location:</h4>
            <b-list-group-item>City: {{player.city}}</b-list-group-item>
            <b-list-group-item>Province: {{player.province}}</b-list-group-item>
            <b-list-group-item>Country: {{player.country}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import jumbotron from '../components/jumbotron';
export default {
    components: {
    jumbotron
    
  },
  data(){
      return{
          player: ''
      }
  },
  methods:{
      //get oen player details
      fetchPlayer(id){
          this.$http.get("http://bluedrop/api/player/"+id)
          .then(function(response){
            this.player= response.body;
          })
      .catch(function(error){
         return "Error";
       })
     },
     //delete a player
     deletePlayer(id){
         this.$http.delete("http://bluedrop/api/player/delete/"+id)
         .then(function(response){
             //redirect to home
             this.$router.push({path:"/"});
         })
     }
   },

 
  // run only when loaded
  created: function(){
    this.fetchPlayer(this.$route.params.id);
  }
    
}
</script>

<style scoped>
    #button{
        float: right;
        margin: 10px;
    }
</style>