<template>
  <div class="text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 50px">404</div>

      <div class="text-h2">Oops. Nothing here...</div>
      <div>
        <q-btn
          class="q-mt-xl"
          color="purple"
          text-color="white"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
      <div><q-img class="img404" src="404_not_found.png" /></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>

<style scoped>
.img404 {
  margin-left: 8rem;
  margin-top: 1rem;
}
</style>
