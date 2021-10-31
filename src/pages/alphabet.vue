<template>
  <q-page class="column">
    <table class="q-table alphabet-table">
      <thead>
        <tr>
          <th>Letter</th>
          <th>Tips</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="letter in alphabet" :key="letter.alphabet" v-ripple>
          <td>{{ letter.letter }}</td>
          <td>{{ letter.tips }}</td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>
<script>
import alphabetJson from "./alphabet.json";
export default {
  data() {
    return {
      alphabet: alphabetJson,
    };
  },
};
</script>
