<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="verbs in czasowniki" :key="verbs.ja">
      <table class="q-table">
        <th>{{ verbs.title }}</th>
        <tbody>
          <tr>
            <td>{{ verbs.ja }}</td>
          </tr>
          <tr>
            <td>{{ verbs.ty }}</td>
          </tr>
          <tr>
            <td>{{ verbs.on }}</td>
          </tr>
          <tr>
            <td>{{ verbs.my }}</td>
          </tr>
          <tr>
            <td>{{ verbs.wy }}</td>
          </tr>
          <tr>
            <td>{{ verbs.oni }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import verbsJson from "./verbs.json";
export default {
  data() {
    return {
      czasowniki: verbsJson,
    };
  },
};
</script>
