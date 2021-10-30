<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="numbers in liczby" :key="numbers.numeral">
      <q-img class="card-img" :src="numbers.image" />
      <table class="q-table">
        <tbody>
          <tr class="number-table-head">
            <td>Number</td>
            <td>Age</td>
            <td>Money</td>
          </tr>
          <tr>
            <td>{{ numbers.numeral }}</td>
            <td>{{ numbers.age }}</td>
            <td>{{ numbers.money }}</td>
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
      liczby: [
        {
          numeral: "Jeden",
          age: "Lat",
          money: "Złoty",
          image: "/numbers/1.png",
        },
        {
          numeral: "Dwa",
          age: "Lata",
          money: "Złote",
          image: "/numbers/2.png",
        },
        {
          numeral: "Trzy",
          age: "Lata",
          money: "Złote",
          image: "/numbers/3.png",
        },
        {
          numeral: "Cztery",
          age: "Lata",
          money: "Złote",
          image: "/numbers/4.png",
        },
        {
          numeral: "Pięć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/5.png",
        },
        {
          numeral: "Sześć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/6.png",
        },
        {
          numeral: "Siedem",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/7.png",
        },
        {
          numeral: "Osiem",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/8.png",
        },
        {
          numeral: "Dziewięć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/9.png",
        },
        {
          numeral: "Dziesięć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/10.png",
        },
        {
          numeral: "Dwadzieścia",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/20.png",
        },
        {
          numeral: "Trzydzieści",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/30.png",
        },
        {
          numeral: "Czterdzieści",
          age: "Lata",
          money: "Złotych",
          image: "/numbers/40.png",
        },
        {
          numeral: "Pięćdziesiąt",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/50.png",
        },
        {
          numeral: "Sześć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/60.png",
        },
        {
          numeral: "Siedem",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/70.png",
        },
        {
          numeral: "Osiem",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/80.png",
        },
        {
          numeral: "Dziewięć",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/90.png",
        },
        {
          numeral: "Sto",
          age: "Lat",
          money: "Złotych",
          image: "/numbers/100.png",
        },
      ],
    };
  },
};
</script>
