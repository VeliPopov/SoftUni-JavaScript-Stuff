function admin(input) {
let role = input[0];
//let role = "Administrator";

if (role != "Administrator") {   // АКО Е РАЗЛИЧНО ОТ "?"
  console.log("No permission");
} else {
  console.log("Welcome");
}
}
admin(["Administrator"]);