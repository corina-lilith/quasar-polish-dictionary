<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="people in ludzie" :key="people.english">
      <q-img class="card-img" :src="people.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ people.english }}</td>
            <td>{{ people.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import peopleJson from "./people.json";
export default {
  data() {
    return {
      ludzie: peopleJson,
    };
  },
};
</script>
