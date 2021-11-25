<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Food" to="/food" />
      <q-breadcrumbs-el label="Sweets - Słodycze" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="sweets in słodycze" :key="sweets.english">
      <q-img class="card-img" :src="sweets.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ sweets.english }}</td>
            <td>{{ sweets.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import sweetsJson from "./sweets.json";
export default {
  data() {
    return {
      słodycze: sweetsJson,
    };
  },
};
</script>
