//反覆掃描，從左到右，只要目前這個數值比右邊大就交換
let input = [9, 3, 5, 1, 7, 4, 8];
let len = input.length;
let max = len - 1;
for (let i = 0; i < max; i++) {
  let change = false;
  for (let j = 0; j < max - i; j++) {
    if (input[j] > input[j + 1]) {
      [input[j], input[j + 1]] = [input[j + 1], input[j]];
      change = true;
    } //if 左邊大於右邊對調
    console.log(input);
  } //for回圈
  console.log("-----------");
  if (change === false) {
    console.log("break");
    console.log(input);
    break; //當change是false
  }
}
