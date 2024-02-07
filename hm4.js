function drawTriangle(height, symbol){
  for (let i = 1; i <= height; i ++) {
      console.log(symbol.repeat(i))
  }
}

drawTriangle(5, '*')


function drawTriangle2(height, symbol){
  for (let i = 1; i <= height; i ++) {
      let line = symbol

      for (let z = 1; z < i; z ++) {
          line = line + symbol
      }
      
      console.log (line)
  }
}

drawTriangle2(5, '*')


let sumOfNonMultiplesOfThree = 0;

  for (let num = 1; num <= 100; num++) {
      if (num % 3 !== 0) {
          sumOfNonMultiplesOfThree += num;
      }
  }
  
  console.log("Сума чисел від 1 до 100 включно, які не кратні 3:", sumOfNonMultiplesOfThree);



  function pow(base, exponent){
    let result = 1

    for (let i = 0; i < exponent; i++) {
        result = result * base
    }
    
    console.log("Результат возведения в степень: ", result)
  }

  pow(2, 3)


