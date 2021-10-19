<template>
  <q-page class="column">
    <table class="q-table">
      <thead>
        <tr>
          <th class="text-left">Letter</th>
          <th class="text-left">Tips</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="letter in alphabet" :key="letter.alphabet" v-ripple>
          <td class="text-left">{{ letter.letter }}</td>
          <td class="text-left">{{ letter.tips }}</td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      alphabet: [
        {
          letter: "A a",
          tips: "'a' in large",
        },
        {
          letter: "Ą ą",
          tips: "Nasal o like in o in own",
        },
        {
          letter: "B b",
          tips: "beh",
        },
        {
          letter: "C c",
          tips: "tss-eh'",
        },
        {
          letter: "Ć ć",
          tips: "'ch' in cheap, but a bit softer",
        },
        {
          letter: "D d",
          tips: "'deh'",
        },
        {
          letter: "E e",
          tips: "'e' in bed",
        },
        {
          letter: "Ę ę",
          tips: "Nasal e",
        },
        {
          letter: "F f",
          tips: "eff",
        },
        {
          letter: "G g",
          tips: "'g' in go",
        },
        {
          letter: "H h",
          tips: "'h' in hammer",
        },
        {
          letter: "I i",
          tips: "'ee' in meet",
        },
        {
          letter: "J j",
          tips: "'y' in yes",
        },
        {
          letter: "K k",
          tips: "Use this for the letter 'c'. Eg. Cat is Kot",
        },
        {
          letter: "L l",
          tips: "ell",
        },
        {
          letter: "Ł ł",
          tips: "Use this for W",
        },
        {
          letter: "M m",
          tips: "emm",
        },
        {
          letter: "N n",
          tips: "enn",
        },
        {
          letter: "Ń ń",
          tips: "onn",
        },
        {
          letter: "O o",
          tips: "Sounds like 'oh' with emphasis on 'h'",
        },
        {
          letter: "Ó ó",
          tips: "'oo' in wood",
        },
        {
          letter: "P p",
          tips: "peh",
        },
        {
          letter: "Q",
          tips: "Not used",
        },
        {
          letter: "R r",
          tips: "Sound is 'trilled' r. Sounds like'airrr'",
        },
        {
          letter: "S s",
          tips: "ess",
        },
        {
          letter: "Ś ś",
          tips: "'sh' in sheep, but softer",
        },
        {
          letter: "T t",
          tips: "teh",
        },
        {
          letter: "U u",
          tips: "'oo' in wood",
        },
        {
          letter: "W w",
          tips: "'v' in vow",
        },
        {
          letter: "X x",
          tips: "Not used",
        },
        {
          letter: "Y y",
          tips: "'i' in bit (very short). Pronounced 'igrek' when said alone",
        },
        {
          letter: "Z z",
          tips: "'z' in zoo",
        },
        {
          letter: "Ź ź",
          tips: "Somewhat like si in vision, but softer",
        },
        {
          letter: "Ż ż",
          tips: "Same as above but harder",
        },
        {
          letter: "Ch",
          tips: "'h'",
        },
        {
          letter: "Cz",
          tips: "'ch' sound. Arktyczna = ark-tich-na (arctic)'",
        },
        {
          letter: "Dz",
          tips: "Getting zapped by electricity 'dzz'. Kukurydza = cook-oor-ridz-ah (corn)",
        },
        {
          letter: "Dź",
          tips: "Similar to dz but softer. Niedźwiedź = Knee-air-jeh-vidch (bear)",
        },
        {
          letter: "Dż",
          tips: "A hard 'J' sound. Dżem = gem (jam)",
        },
        {
          letter: "Rz",
          tips: "Rzeka = rzz-ecka (river)",
        },
        {
          letter: "sz",
          tips: "Soft 'sh'. Mysz = mi-shh (mouse)",
        },
      ],
    };
  },
};
</script>
