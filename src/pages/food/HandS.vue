<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Food" to="/food" />
      <q-breadcrumbs-el label="Herbs + Spices - Zioła i Przyprawy" />
    </q-breadcrumbs>
  </div>
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
