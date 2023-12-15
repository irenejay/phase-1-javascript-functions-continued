const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  };
  
  // Test the function
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("have a picnic")); // Output: "This Saturday, I want to have a picnic!"

  

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Test the function
  console.log(mondayWork()); // Output: 
  console.log(mondayWork("work on a project")); 
  

  const wrapAdjective = function(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  };
  
  // Test the function
  const result1 = wrapAdjective()(); // Output: "You are *special*!"
  const result2 = wrapAdjective("~")("awesome"); // Output: "You are ~awesome~!"
  const result3 = wrapAdjective("***")("fantastic"); // Output: "You are ***fantastic***!"
  