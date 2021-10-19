<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="colour in kolory" :key="colour.enlish">
      <q-img class="card-img" :src="colour.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td class="text-center">{{ colour.enlish }}</td>
            <td class="text-center">{{ colour.polish }}</td>
          </tr>
        </tbody>
      </table>
      <q-card-separator />
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kolory: [
        {
          enlish: "Red",
          polish: "Czerwony",
          image: "/colours/red.jpg",
        },
        {
          enlish: "Orange",
          polish: "Pomarańczowy",
          image: "/colours/orange.jpg",
        },
        {
          enlish: "Yellow",
          polish: "Żółty",
          image: "/colours/yellow.jpg",
        },
        {
          enlish: "Green",
          polish: "Zielony",
          image: "/colours/green.jpg",
        },
        {
          enlish: "Blue",
          polish: "niebieski",
          image: "/colours/blue.jpg",
        },
        {
          enlish: "Purple",
          polish: "Purpurowy",
          image: "/colours/purple.jpg",
        },
        {
          enlish: "Indigo",
          polish: "Indygo",
          image: "/colours/indigo.jpg",
        },
        {
          enlish: "Pink",
          polish: "Różowy",
          image: "/colours/pink.jpg",
        },
        {
          enlish: "Silver",
          polish: "Srebro",
          image: "/colours/silver.jpg",
        },
        {
          enlish: "Gold",
          polish: "Złoto",
          image: "/colours/gold.jpg",
        },
        {
          enlish: "Black",
          polish: "Czarny",
          image: "/colours/black.jpg",
        },
        {
          enlish: "White",
          polish: "Biały",
          image: "/colours/white.jpg",
        },
      ],
    };
  },
};
</script>
