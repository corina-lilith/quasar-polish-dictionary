<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="animal in zwierzę" :key="animal.title">
      <q-img class="card-img" :src="animal.image" />
      <table class="q-table">
        <tbody>
          <tr>
            <td>{{ animal.title }}</td>
            <td>{{ animal.tips }}</td>
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
      zwierzę: [
        {
          title: "Ant",
          tips: "Mrówka",
          image: "/animals/ant.jpg",
        },
        {
          title: "Bear",
          tips: "Niedźwiedź",
          image: "/animals/bear.jpg",
        },
        {
          title: "Bee",
          tips: "Pszczoła",
          image: "/animals/bee.jpg",
        },
        {
          title: "Bird",
          tips: "Ptak",
          image: "/animals/bird.jpg",
        },
        {
          title: "Butterfly",
          tips: "Motyl",
          image: "/animals/butterfly.jpg",
        },
        {
          title: "Camel",
          tips: "Wielbłąd",
          image: "/animals/camel.jpg",
        },
        {
          title: "Cat",
          tips: "Kot",
          image: "/animals/cat.jpg",
        },
        {
          title: "Cow",
          tips: "Krowa",
          image: "/animals/cow.jpg",
        },
        {
          title: "Dog",
          tips: "Pies",
          image: "/animals/dog.jpg",
        },
        {
          title: "Fish",
          tips: "Ryba",
          image: "/animals/fish.jpg",
        },
        {
          title: "Flamingo",
          tips: "Flaming",
          image: "/animals/flamingo.jpg",
        },
        {
          title: "Horse",
          tips: "Koń",
          image: "/animals/horse.jpg",
        },
        {
          title: "Lizard",
          tips: "Jaszczurka",
          image: "/animals/lizard.jpg",
        },
        {
          title: "Monkey",
          tips: "Małpa",
          image: "/animals/monkey.jpg",
        },
        {
          title: "Mouse",
          tips: "Mysz",
          image: "/animals/mouse.jpg",
        },
        {
          title: "Penguin",
          tips: "Pingwin",
          image: "/animals/penguin.jpg",
        },
        {
          title: "Pig",
          tips: "Świnia",
          image: "/animals/pig.jpg",
        },
        {
          title: "Rabbit",
          tips: "Królik",
          image: "/animals/rabbit.jpg",
        },
        {
          title: "Snake",
          tips: "Wąż",
          image: "/animals/snake.jpg",
        },
        {
          title: "Spider",
          tips: "Pająk",
          image: "/animals/spider.jpg",
        },
        {
          title: "Stag",
          tips: "Jeleń",
          image: "/animals/stag.jpg",
        },
      ],
    };
  },
};
</script>
