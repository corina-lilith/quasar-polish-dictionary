<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="hobbies in zainteresowania" :key="hobbies.english">
      <q-img class="card-img" :src="hobbies.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ hobbies.english }}</td>
            <td>{{ hobbies.polish }}</td>
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
      zainteresowania: [
        {
          english: "Basketball",
          polish: "Koszykówka",
          image: "/hobbies/basketball.jpg",
        },
        {
          english: "Cook",
          polish: "Gotować",
          image: "/hobbies/cook.jpg",
        },
        {
          english: "Dance",
          polish: "Taniec",
          image: "/hobbies/dance.jpg",
        },
        {
          english: "Football",
          polish: "Piłka Nożna",
          image: "/hobbies/football.jpg",
        },
        {
          english: "Gym",
          polish: "Siłownia",
          image: "/hobbies/gym.jpg",
        },
        {
          english: "Gymnastics",
          polish: "Gimnastyka",
          image: "/hobbies/gymnastics.jpg",
        },
        {
          english: "Hiking",
          polish: "Wędrówki",
          image: "/hobbies/hiking.jpg",
        },
        {
          english: "Knitting",
          polish: "Robienie Na Drutach",
          image: "/hobbies/knitting.jpg",
        },
        {
          english: "Netball",
          polish: "Siatkówka",
          image: "/hobbies/netball.jpg",
        },
        {
          english: "Painting",
          polish: "Obraz",
          image: "/hobbies/painting.jpg",
        },
        {
          english: "Photography",
          polish: "Fotografia",
          image: "/hobbies/photography.jpg",
        },
        {
          english: "Reading",
          polish: "Czytanie",
          image: "/hobbies/reading.jpg",
        },
        {
          english: "Shopping",
          polish: "Zakupy",
          image: "/hobbies/shopping.jpg",
        },
        {
          english: "Sing",
          polish: "Śpiewać",
          image: "/hobbies/sing.jpg",
        },
        {
          english: "Skiing",
          polish: "Narciarstwo",
          image: "/hobbies/skiing.jpg",
        },
        {
          english: "Soccer",
          polish: "Piłka Nożna",
          image: "/hobbies/soccer.jpg",
        },
        {
          english: "Swimming",
          polish: "Pływanie",
          image: "/hobbies/swimming.jpg",
        },
        {
          english: "Walking",
          polish: "Pieszy",
          image: "/hobbies/walking.jpg",
        },
      ],
    };
  },
};
</script>
