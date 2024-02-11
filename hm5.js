  function myIsNaN(value) {
    if (typeof value === 'number') {
      return value !== value;
    }
    return false;
  }



  function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);
  
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const percentageEven = (evenCount / count) * 100;
    const percentageOdd = (oddCount / count) * 100;
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}% : ${percentageOdd.toFixed(2)}%`);
  }



  function myPadStartEnd(yourString, symbol, limitToNumberOfSymbols, addToStart) {

    const requiredCount = limitToNumberOfSymbols - yourString.length;

    const actualCount = Math.min(requiredCount, limitToNumberOfSymbols);
  
    let actualSymbol = '';
 
    while (actualSymbol.length < actualCount) {
      actualSymbol += symbol;
    }
  
    let result;
    if (addToStart === true) {
      result = actualSymbol.substring(0, actualCount) + yourString;
    } else {
      result = yourString + actualSymbol.substring(0, actualCount);
    }
  
    return result;
  }
