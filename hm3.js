function metricConverter(measurementValue, value) {
    switch (measurementValue) {
      case "km":
        console.log(value + " km is " + value * 1000 + " m");
        break;
  
      case "hour":
        console.log(value + " hour is " + value * 60 + " min");
        break;
  
      case "kg":
        console.log(value + " kg is " + value * 1000 + " gr");
        break;
  
      default:
        console.log("Unknown measurement value!");
    }
  }
  
  metricConverter("km", 12);