let str = "modules"
let reg = /[^Aa]{6,}/
console.log(str.search(reg))

var arr = [
  {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
  },
  {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com"
  },
  {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru" // Нам такі не підходять
  },
];

let regForEmail = /^([a-z0-9_\.-]+)@(gmail\.com|yahoo\.com)/;

function trueEmail(item) {
    return regForEmail.test(item.email);
};

console.log(arr.filter(trueEmail));