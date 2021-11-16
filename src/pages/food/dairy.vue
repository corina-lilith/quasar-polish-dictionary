<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="dairy in leczarnia" :key="dairy.english">
      <q-img class="card-img" :src="dairy.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ dairy.english }}</td>
            <td>{{ dairy.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import dairyJson from "./dairy.json";
export default {
  data() {
    return {
      leczarnia: dairyJson,
    };
  },
};
</script>
