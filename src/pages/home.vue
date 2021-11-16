<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="home in dom" :key="home.english">
      <router-link :to="home.link">
        <q-img class="card-img" :src="home.image" />
        <table class="q-table">
          <tbody>
            <tr>
              <td>{{ home.english }}</td>
              <td>{{ home.polish }}</td>
            </tr>
          </tbody>
        </table>
      </router-link>
    </q-card>
  </div>
</template>
<script>
import homeJson from "./home.json";
export default {
  data() {
    return {
      dom: homeJson,
    };
  },
};
</script>
