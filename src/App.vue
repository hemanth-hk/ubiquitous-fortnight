<template>
  <div>
    <table>
      <caption>
        Contributor's List
      </caption>
      <tr>
        <th>Name</th>
        <th>Portfolio Link</th>
      </tr>
      <tr v-for="(u, idx) in userData" :key="idx">
        <td>{{ u.name }}</td>
        <td>
          <a :href="u.url" target="blank">{{ u.url }}</a>
        </td>
      </tr>
    </table>
    <tr v-for="(gituser, idx) in userData" :key="idx" class="row">
      <github-card
      :username="gituser.username">
      </github-card>
    </tr>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: "App",
  components: {
    'github-card': Card
  },
  data() {
    return {
      userData: [
        {
          name: "Hemanth Kumar",
          url: "https://github.com/hemanth-hk",
          username: "hemanth-hk"
        },
        {
          name: "Samar Pratap Singh",
          url: "https://github.com/samar-1601",
          username: "samar-1601"
        },
        {
          name: "Kunal Katiyar",
          url: "https://github.com/KunalKatiyar",
          username: "KunalKatiyar"
        }
      ],
    };
  },
};
</script>

<style>
@import "../public/style.css";
</style>
