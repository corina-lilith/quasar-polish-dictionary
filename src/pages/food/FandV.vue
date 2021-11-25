<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Food" to="/food" />
      <q-breadcrumbs-el label="Fruit + Vegetables - Owoce i Warzywa" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="FandV in owoc" :key="FandV.english">
      <q-img class="card-img" :src="FandV.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ FandV.english }}</td>
            <td>{{ FandV.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import FandVJson from "./FandV.json";
export default {
  data() {
    return {
      owoc: FandVJson,
    };
  },
};
</script>
