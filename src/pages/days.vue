<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="days in dni" :key="days.now">
      <q-img class="card-img" :src="days.image" />
      <table class="q-table">
        <tbody>
          <tr class="number-table-head">
            <td>English</td>
            <td>Polish</td>
          </tr>
          <tr>
            <td>{{ days.english }}</td>
            <td>{{ days.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import daysJson from "./days.json";
export default {
  data() {
    return {
      dni: daysJson,
    };
  },
};
</script>
