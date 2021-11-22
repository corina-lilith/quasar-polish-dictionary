<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="seafood in morza" :key="seafood.english">
      <q-img class="card-img" :src="seafood.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ seafood.english }}</td>
            <td>{{ seafood.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import seafoodJson from "./seafood.json";
export default {
  data() {
    return {
      morza: seafoodJson,
    };
  },
};
</script>
