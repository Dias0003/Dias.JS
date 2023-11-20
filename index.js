   console.log('test');

const array = [15, 16, 17, 18, 19, 20];
const luwiarray = [];
const kentiarray = [];

for (let i = 0; i < array.length; i++) {
  const num = array[i];

  if (num % 2 === 0) {
    luwiarray.push(num);
  } else {
    kentiarray.push(num);
  }
}

console.log("Luwi Array (Odd):", luwiarray);
console.log("Kenti Array (Even):", kentiarray);

console.log("Main Array:", array);

const array1 = [15, 16, 17, 18, 19, 20];
let sahualo = 0;

for (let i = 0; i < array1.length; i++) {
  sahualo += array1[i];
}

const sashualo = sahualo / array1.length;
console.log(sashualo);




