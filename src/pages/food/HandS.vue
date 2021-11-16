<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="bread in chleb" :key="bread.english">
      <q-img class="card-img" :src="bread.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ bread.english }}</td>
            <td>{{ bread.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import breadJson from "./bread.json";
export default {
  data() {
    return {
      chleb: breadJson,
    };
  },
};
</script>
