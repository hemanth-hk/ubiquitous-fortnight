<template>
    <div class="ui card">
     <div class="image">
       <img :src="user.avatar_url">
     </div>
     <div class="content">
       <a :href="`https://github.com/${username}`" class="header">{{user.name}}</a>
       <div class="meta">
         <span class="date">Joined in {{user.created_at}}</span>
       </div>
       <div class="description">
         {{user.bio}}
       </div>
     </div>
     <div class="extra content">
       <a :href="`https://github.com/${username}?tab=followers`">
         <i class="user icon"></i>
         {{user.followers}} Followers
       </a>
     </div>
   </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'github-card',
    props: {
        username: {
           type: String,
           required: true
        }
    },
    data() {
        return {
           user: {}
        };
    },
    async created() {
      console.log(this.username)
       const response = await axios.get(`https://api.github.com/users/KunalKatiyar`);
       this.user = response.data;
       this.user.created_at=moment(String(this.user.created_at)).format('MM/DD/YYYY hh:mm')
    }
}
</script>

<style>

</style>