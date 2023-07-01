// const s = 1;
// const m = 1;
// const l = 1;

// insted of doing this, we can use enums
const enum Sizes {
  Small = 4,
  Medium,
  Large,
}
const mySize1 = Sizes.Small;
const mySize2 = Sizes.Medium;
const mySize3 = Sizes.Large;
console.log(
  "Size 1 => " + mySize1,
  "\n",
  "Size 2 => " + mySize2,
  "\n",
  "Size 3 => " + mySize3
);
