<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="weather in pogoda" :key="weather.english">
      <q-img class="card-img" :src="weather.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ weather.english }}</td>
            <td>{{ weather.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import weatherJson from "./weather.json";
export default {
  data() {
    return {
      pogoda: weatherJson,
    };
  },
};
</script>
