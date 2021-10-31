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
export default {
  data() {
    return {
      dom: [
        {
          english: "Alphabet",
          polish: "Alfabet",
          image: "/home/alphabet.jpg",
        },
        {
          english: "Animals",
          polish: "Zwierzę",
          image: "/home/animals.jpg",
        },
        {
          english: "Colours",
          polish: "Kolory",
          image: "/home/colours.jpg",
        },
        {
          english: "Drinks",
          polish: "Napoje",
          image: "/home/drinks.jpg",
        },
        {
          english: "Food",
          polish: "Jedzenie",
          image: "/home/food.jpg",
        },
        {
          english: "Hobbies",
          polish: "Zainteresowania",
          image: "/home/hobbies.jpg",
        },
        {
          english: "Numbers",
          polish: "Liczby",
          image: "/home/numbers.jpg",
        },
        {
          english: "Occupations",
          polish: "Zawody",
          image: "/home/occupations.jpg",
        },
        {
          english: "People",
          polish: "Ludzie",
          image: "/home/people.jpg",
        },
        {
          english: "Time",
          polish: "Czas",
          image: "/home/time.jpg",
        },
        {
          english: "Transport",
          polish: "Transport",
          image: "/home/transport.jpg",
        },
        {
          english: "Verbs",
          polish: "Czasowniki",
          image: "/home/verbs.jpg",
        },
        {
          english: "Weather",
          polish: "Pogoda",
          image: "/home/weather.jpg",
        },
      ],
    };
  },
};
</script>
