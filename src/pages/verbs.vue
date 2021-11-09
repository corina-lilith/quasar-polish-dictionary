<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="verbs in czasowniki" :key="verbs.english">
      <q-img class="card-img" :src="verbs.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ verbs.english }}</td>
            <td>{{ verbs.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import verbsJson from "./verbs.json";
export default {
  data() {
    return {
      czasowniki: verbsJson,
    };
  },
};
</script>
