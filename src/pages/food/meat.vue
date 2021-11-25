<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Food" to="/food" />
      <q-breadcrumbs-el label="Meats - Mięso" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="meat in mięso" :key="meat.english">
      <q-img class="card-img" :src="meat.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ meat.english }}</td>
            <td>{{ meat.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import breadJson from "./meat.json";
export default {
  data() {
    return {
      mięso: breadJson,
    };
  },
};
</script>
