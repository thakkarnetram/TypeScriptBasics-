function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Its Null or undefined");
}
greet(null);
