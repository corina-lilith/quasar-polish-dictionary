<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="transport in przewozowy" :key="transport.english">
      <q-img class="card-img" :src="transport.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ transport.english }}</td>
            <td>{{ transport.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import transportJson from "./transport.json";
export default {
  data() {
    return {
      przewozowy: transportJson,
    };
  },
};
</script>
