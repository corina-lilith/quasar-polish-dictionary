<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="time in czas" :key="time.english">
      <router-link :to="time.link">
        <q-img class="card-img" :src="time.image" />
        <table class="q-table">
          <tbody>
            <tr>
              <td>{{ time.english }}</td>
              <td>{{ time.polish }}</td>
            </tr>
          </tbody>
        </table>
      </router-link>
    </q-card>
  </div>
</template>
<script>
import timeHomeJson from "./timeHome.json";
export default {
  data() {
    return {
      czas: timeHomeJson,
    };
  },
};
</script>
