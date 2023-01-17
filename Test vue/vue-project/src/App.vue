<template>
  <div>
    <h1>Bonjour <br> {{ selectedUser.name.first }} {{ selectedUser.name.last }}</h1>
    <div class="selecteur">
      <p>Sélectionnner un nouveau profil à l'aide de cette liste</p>
      <select v-model="selectedUser">
        <option v-for="(user, index) in users" :value="user" :key="index">
          {{ user.name.first }} {{ user.name.last }}
        </option>
      </select>
    </div>
    <div class="bouton">
      <button @click="getUserPhoto">Afficher sa photo de profil</button>
    </div>
  </div>
  <div class="image">
    <img :src="userPhoto || defaultPhoto" alt="Photo de l'utilisateur">
  </div>
</template>

<script>
import axios from 'axios';
import defaultPhoto from "../src/assets/hero-image.jpg"

export default {
  data() {
    return {
      selectedUser: {},
      users: [],
      userPhoto: "",
      defaultPhoto: defaultPhoto,
    }
  },
  created() {
    axios.get('https://randomuser.me/api/?results=10&nat=fr')
      .then(response => {
        this.users = response.data.results;
        this.selectedUser = this.users[0];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getUserPhoto() {
      this.userPhoto = this.selectedUser.picture.large;
    }
  },
}
</script>