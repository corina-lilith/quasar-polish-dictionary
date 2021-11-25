<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Food" to="/food" />
      <q-breadcrumbs-el label="Dairy - Leczarnia" />
    </q-breadcrumbs>
  </div>
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
