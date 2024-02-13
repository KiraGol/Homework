const movie = {
  title: 'Titanic',
  director: "James Cameron",
  year: 1997,
  actors: ["Leonardo DiCaprio", "Kate Winslet"],

  getInfo: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`)
      }
    }
  }
}

movie.getInfo()
movie.newProperty = 'Нова властивість!'; 
movie.getInfo()

const services = {
  "стрижка": 60,
  "гоління": 80,
  "Миття голови": 100,

  price: function () {
    let totalPrice = 0;

    for (let key in this) {
      if (typeof this[key] !== "function") {
        totalPrice = totalPrice + this[key]
      }
    }
    console.log(`Сумма всех услуг: ${totalPrice}грн`)
},

  minPrice: function () {
    let minPrice = Infinity;

    for (let key in this) {
      if (typeof this[key] !== "function") {
        if (minPrice > this[key]) {
          minPrice = this[key]
        }
      }
    }
    console.log(`Минимальная стоимость услуги: ${minPrice}грн`)
  },

  maxPrice: function () {
    let maxPrice = 0;

    for (let key in this) {
      if (typeof this[key] !== "function") {
        if (maxPrice < this[key]) {
          maxPrice = this[key]
        }
      }
    }
    console.log(`Максимальная стоимость услуги: ${maxPrice}грн`)
  },
}

services.maxPrice()
services["ногти"] = 150
services.maxPrice()
