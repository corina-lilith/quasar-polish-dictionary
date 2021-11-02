<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="drinks in napoje" :key="drinks.english">
      <q-img class="card-img" :src="drinks.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ drinks.english }}</td>
            <td>{{ drinks.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import drinksJson from "./drinks.json";
export default {
  data() {
    return {
      napoje: drinksJson,
    };
  },
};
</script>
