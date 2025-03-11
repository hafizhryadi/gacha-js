const GachaJS = require("./src/gacha");

const rates = {
    c: 34.92,
    r: 28.57,
    h: 11.11,
    rr: 3.97,
    ar: 9.53,
    sar: 9.52,
    im: 0.79,
    ur: 1.59,
};

const gacha = new GachaJS(rates);

// for item variants
// const gacha = new GachaJS(
//   {
//     A: 5.9,
//     B: 12.8,
//     C: 18.8,
//     D: 62.5,
//   },
//   {
//     collection: [
//       { name: "ssr1", rarity: "A" },
//       { name: "ssr2", rarity: "A" },
//       { name: "sr1", rarity: "B" },
//       { name: "sr2", rarity: "B" },
//       { name: "sr3", rarity: "B" },
//       { name: "r1", rarity: "C" },
//       { name: "r2", rarity: "C" },
//       { name: "r3", rarity: "C" },
//       { name: "r4", rarity: "C" },
//       { name: "c1", rarity: "D" },
//       { name: "c2", rarity: "D" },
//       { name: "c3", rarity: "D" },
//       { name: "c4", rarity: "D" },
//       { name: "c5", rarity: "D" },
//     ],
//     findKey: "rarity",
//   }
// );

gacha.setRates({
  c: 34.92,
  r: 28.57,
  h: 11.11,
  rr: 3.97,
  ar: 9.53,
  sar: 9.52,
  im: 0.79,
  ur: 1.59,
});

//console.log(gacha.getPullByCollection(5));
for (let index = 0; index < 10; index++) {
    console.log(gacha.getPullByRarity(5));
}


module.exports = GachaJS;

