<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="numbers in liczby" :key="numbers.numeral">
      <q-img class="card-img" :src="numbers.image" />
      <table class="q-table">
        <tbody>
          <tr class="number-table-head">
            <td>Number</td>
            <td>Age</td>
            <td>Money</td>
          </tr>
          <tr>
            <td>{{ numbers.numeral }}</td>
            <td>{{ numbers.age }}</td>
            <td>{{ numbers.money }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import numbersJson from "./numbers.json";
export default {
  data() {
    return {
      liczby: numbersJson,
    };
  },
};
</script>
