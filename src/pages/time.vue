<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Time" to="/timeHome" />
      <q-breadcrumbs-el label="Time - Liczby" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="time in liczby" :key="time.now">
      <q-img class="card-img" :src="time.image" />
      <table class="q-table">
        <tbody>
          <tr class="number-table-head">
            <td>Now</td>
            <td>When</td>
          </tr>
          <tr>
            <td>{{ time.now }}</td>
            <td>{{ time.when }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import timeJson from "./time.json";
export default {
  data() {
    return {
      liczby: timeJson,
    };
  },
};
</script>
