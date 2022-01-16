<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="red"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Słownik</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="flag-poland.png" class="header-image absolute-top" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 192px);
          margin-top: 192px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <!--Home-->
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>
          <!--/Home-->

          <!--Alphabet-->
          <q-item to="/alphabet" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="font_download" />
            </q-item-section>
            <q-item-section> Alphabet </q-item-section>
          </q-item>
          <!--/Alphabet-->

          <!--Animals-->
          <q-item to="/animals" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="pets" />
            </q-item-section>
            <q-item-section> Animals </q-item-section>
          </q-item>
          <!--/Animals-->

          <!--Colours-->
          <q-item to="/colours" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="palette" />
            </q-item-section>
            <q-item-section> Colours </q-item-section>
          </q-item>
          <!--/Colours-->

          <!--Drinks-->
          <q-item to="/drinks" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="local_bar" />
            </q-item-section>
            <q-item-section> Drinks </q-item-section>
          </q-item>
          <!--/Drinks-->

          <!--Food-->
          <q-item to="/food" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="lunch_dining" />
            </q-item-section>
            <q-item-section> Food </q-item-section>
          </q-item>
          <!--/Food-->

          <!--Hobbies-->
          <q-item to="/hobbies" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="hiking" />
            </q-item-section>
            <q-item-section> Hobbies </q-item-section>
          </q-item>
          <!--/Hobbies-->

          <!--Numbers-->
          <q-item to="/numbers" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="pin" />
            </q-item-section>
            <q-item-section> Numbers </q-item-section>
          </q-item>
          <!--/Numbers-->

          <!--Occupations-->
          <q-item to="/occupations" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>
            <q-item-section> Occupations </q-item-section>
          </q-item>
          <!--/Occupations-->

          <!--People-->
          <q-item to="/people" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section> People </q-item-section>
          </q-item>
          <!--/People-->

          <!--Time-->
          <q-item to="/timeHome" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="schedule" />
            </q-item-section>
            <q-item-section> Time </q-item-section>
          </q-item>
          <!--/Time-->

          <!--Transport-->
          <q-item to="/transport" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="directions_car" />
            </q-item-section>
            <q-item-section> Transport </q-item-section>
          </q-item>
          <!--/Transport-->

          <!--Verbs-->
          <q-item to="/verbs" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="auto_stories" />
            </q-item-section>
            <q-item-section> Verbs </q-item-section>
          </q-item>
          <!--/Verbs-->

          <!--Weather-->
          <q-item to="/weather" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section> Weather </q-item-section>
          </q-item>
          <!--/Weather-->
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="mountains.jpg" style="height: 192px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="140px" class="q-mb-sm" style="margin-left: 2rem">
            <img src="profile-eagle.jpg" />
          </q-avatar>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    },
  },
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  filter: greyscale(100%);
}
</style>
