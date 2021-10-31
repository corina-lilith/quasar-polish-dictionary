<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="colour in kolory" :key="colour.english">
      <q-img class="card-img" :src="colour.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ colour.english }}</td>
            <td>{{ colour.polish }}</td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kolory: [
        {
          english: "Red",
          polish: "Czerwony",
          image: "/colours/red.jpg",
        },
        {
          english: "Orange",
          polish: "Pomarańczowy",
          image: "/colours/orange.jpg",
        },
        {
          english: "Yellow",
          polish: "Żółty",
          image: "/colours/yellow.jpg",
        },
        {
          english: "Green",
          polish: "Zielony",
          image: "/colours/green.jpg",
        },
        {
          english: "Blue",
          polish: "niebieski",
          image: "/colours/blue.jpg",
        },
        {
          english: "Purple",
          polish: "Purpurowy",
          image: "/colours/purple.jpg",
        },
        {
          english: "Indigo",
          polish: "Indygo",
          image: "/colours/indigo.jpg",
        },
        {
          english: "Pink",
          polish: "Różowy",
          image: "/colours/pink.jpg",
        },
        {
          english: "Silver",
          polish: "Srebro",
          image: "/colours/silver.jpg",
        },
        {
          english: "Gold",
          polish: "Złoto",
          image: "/colours/gold.jpg",
        },
        {
          english: "Black",
          polish: "Czarny",
          image: "/colours/black.jpg",
        },
        {
          english: "White",
          polish: "Biały",
          image: "/colours/white.jpg",
        },
      ],
    };
  },
};
</script>
