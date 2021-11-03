<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="hobbies in zainteresowania" :key="hobbies.english">
      <q-img class="card-img" :src="hobbies.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ hobbies.english }}</td>
            <td>{{ hobbies.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import hobbiesJson from "./hobbies.json";
export default {
  data() {
    return {
      zainteresowania: hobbiesJson,
    };
  },
};
</script>
