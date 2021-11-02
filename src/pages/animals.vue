<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="animal in zwierzę" :key="animal.english">
      <q-img class="card-img" :src="animal.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ animal.english }}</td>
            <td>{{ animal.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import animalsJson from "./animals.json";
export default {
  data() {
    return {
      zwierzę: animalsJson,
    };
  },
};
</script>
