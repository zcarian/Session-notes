let start = 0;

function Counting(number) {
  for (let i = 0; i < number; i++) {
    console.log(i + 1);
  }
  start++;
}

Counting(2);
Counting(4);
Counting(3);
Counting(1);
console.log("");
console.log(start);
