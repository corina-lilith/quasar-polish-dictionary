<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="frozen in mrożony" :key="frozen.english">
      <q-img class="card-img" :src="frozen.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ frozen.english }}</td>
            <td>{{ frozen.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import frozenJson from "./frozen.json";
export default {
  data() {
    return {
      mrożony: frozenJson,
    };
  },
};
</script>
