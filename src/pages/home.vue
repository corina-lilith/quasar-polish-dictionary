<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="home in dom" :key="home.english">
      <q-img class="card-img" :src="home.image" />
      <table class="q-table">
        <!-- <q-item to="{{ colour.href }}" exact clickable> {{}} </q-item> this may be the link but doesn't quite work-->
        <tbody>
          <tr>
            <td>{{ home.english }}</td>
            <td>{{ home.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
import homeJson from "./home.json";
export default {
  data() {
    return {
      dom: homeJson,
    };
  },
};
</script>
