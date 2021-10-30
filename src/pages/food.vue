<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="food in jedzenie" :key="food.english">
      <q-img class="card-img" :src="food.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ food.english }}</td>
            <td>{{ food.polish }}</td>
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
      jedzenie: [
        {
          english: "Beer",
          polish: "Piwo",
          image: "/food/beer.jpg",
        },
        {
          english: "Coffee",
          polish: "Kawa",
          image: "/food/coffee.jpg",
        },
        {
          english: "Cola",
          polish: "Cola",
          image: "/food/cola.jpg",
        },
        {
          english: "Juice",
          polish: "Sok",
          image: "/food/juice.jpg",
        },
        {
          english: "Cocktail",
          polish: "koktajl",
          image: "/food/cocktail.jpg",
        },
        {
          english: "Tea",
          polish: "Herbata",
          image: "/food/tea.jpg",
        },
        {
          english: "Vodka",
          polish: "Wódka",
          image: "/food/vodka.jpg",
        },
        {
          english: "Water",
          polish: "Woda",
          image: "/food/water.jpg",
        },
        {
          english: "Wine",
          polish: "Wino",
          image: "/food/wine.jpg",
        },
      ],
    };
  },
};
</script>
