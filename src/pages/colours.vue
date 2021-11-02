<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="colour in kolory" :key="colour.english">
      <q-img class="card-img" :src="colour.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ colour.english }}</td>
            <td>{{ colour.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import coloursJson from "./colours.json";
export default {
  data() {
    return {
      kolory: coloursJson,
    };
  },
};
</script>
