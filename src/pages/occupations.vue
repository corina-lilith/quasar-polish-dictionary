<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="occupations in zawody" :key="occupations.english">
      <q-img class="card-img" :src="occupations.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ occupations.english }}</td>
            <td>{{ occupations.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import occupationsJson from "./occupations.json";
export default {
  data() {
    return {
      zawody: occupationsJson,
    };
  },
};
</script>
