<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="food in jedzenie" :key="food.english">
      <router-link :to="food.link">
        <q-img class="card-img" :src="food.image" />
        <table class="q-table">
          <tbody>
            <tr>
              <td>{{ food.english }}</td>
              <td>{{ food.polish }}</td>
            </tr>
          </tbody>
        </table>
      </router-link>
    </q-card>
  </div>
</template>
<script>
import foodJson from "./food.json";
export default {
  data() {
    return {
      jedzenie: foodJson,
    };
  },
};
</script>
