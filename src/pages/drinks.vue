<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="drinks in napoje" :key="drinks.english">
      <q-img class="card-img" :src="drinks.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td class="text-center">{{ drinks.english }}</td>
            <td class="text-center">{{ drinks.polish }}</td>
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
      napoje: [
        {
          english: "Beer",
          polish: "Piwo",
          image: "/drinks/beer.jpg",
        },
        {
          english: "Coffee",
          polish: "Kawa",
          image: "/drinks/coffee.jpg",
        },
        {
          english: "Cola",
          polish: "Cola",
          image: "/drinks/cola.jpg",
        },
        {
          english: "Juice",
          polish: "Sok",
          image: "/drinks/juice.jpg",
        },
        {
          english: "Cocktail",
          polish: "koktajl",
          image: "/drinks/cocktail.jpg",
        },
        {
          english: "Tea",
          polish: "Herbata",
          image: "/drinks/tea.jpg",
        },
        {
          english: "Vodka",
          polish: "Wódka",
          image: "/drinks/vodka.jpg",
        },
        {
          english: "Water",
          polish: "Woda",
          image: "/drinks/water.jpg",
        },
        {
          english: "Wine",
          polish: "Wino",
          image: "/drinks/wine.jpg",
        },
      ],
    };
  },
};
</script>
