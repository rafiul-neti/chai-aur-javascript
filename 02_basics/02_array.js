const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]
const usable_array = another_array.flat(Infinity)
// console.log(usable_array);

console.log(Array.isArray("rafi"));
console.log(Array.from("rafi"));

console.log(Array.from({name: "rafi"})); // interesteing case

const score1 = 58
const score2 = 68
const score3 = 78

console.log(Array.of(score1, score2, score3));