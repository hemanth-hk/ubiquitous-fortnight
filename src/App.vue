<style>
  @import '../public/style.css';
</style>
<template>
  <div>
    <table>
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
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userData: [
        {
          name: "Hemanth Kumar",
          url: "https://github.com/hemanth-hk",
        },
        {
          name: "Samar Pratap Singh",
          url: "https://github.com/samar-1601",
        },
      ],
    };
  },
};
</script>

<style></style>
