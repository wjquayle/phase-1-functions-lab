function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    if (someValue<42){
      return(42-someValue);
    }
    else {
      return(someValue-42);
    }
  }
  
  
  
  function distanceFromHqInFeet (someValue) {
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue)*264;
 }
  
  function distanceTravelledInFeet(start,destination){
    if (destination>start){
      return((destination-start)*264);
    }
    else
      return((start-destination)*264);
  }
  
  
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
