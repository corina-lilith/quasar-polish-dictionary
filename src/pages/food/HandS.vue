<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="HandS in zioła" :key="HandS.english">
      <q-img class="card-img" :src="HandS.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ HandS.english }}</td>
            <td>{{ HandS.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import HandSJson from "./HandS.json";
export default {
  data() {
    return {
      zioła: HandSJson,
    };
  },
};
</script>
