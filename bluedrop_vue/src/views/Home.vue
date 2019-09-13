<template>
  <div class="home container">
    <br>
    <jumbotron message="Manage Players"></jumbotron> 
    <!-- displaying json get players in a table -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Province</th>
          <th>Country</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="player in players" :key="player.id" >
            <td>{{player.id}}</td>
            <td>{{player.name}}</td>
            <td>{{player.age}}</td>
            <td>{{player.city}}</td>
            <td>{{player.province}}</td>
            <td>{{player.country}}</td>
            <td><b-button variant="primary" :to="'/player/'+player.id">View</b-button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import jumbotron from '../components/jumbotron';


export default {
  name: "home",
  components: {
    jumbotron
    
  },
  data(){
    return{
      players:[],
    }
  },
   methods: {
     fetchPlayers(){  
       this.$http.get('http://bluedrop/api/players')
       .then(function(response){
         this.players= response.body;
         //console.log(response.body);
       })
       .catch(function(error){
         return "Error";
       })
     }
   },
 
  // run only when loaded
  created: function(){
    this.fetchPlayers();
  },
  updated: function(){
    this.fetchPlayers();
  }
}
</script>
