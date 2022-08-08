const { clear } = require('console');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
let minRange = 1

//User engaged, two numbers chosen!
async function start() {

  //? How do I make sure only numbers can be entered by user? 
  console.log("Let's play a game where you (human) choose a range, and a secret number within it. \nThen, I (computer) will try to guess your secret number.");
  let upperRange = await ask ("If the low end of the range is: " + minRange + "\nWhat would you like the high end to be? ");


  //? How would I delay this being shown immediately? Use setTimeout()?
  console.log("You chose: " + upperRange + " as the high end of the range!");
      let userSecretNum = await ask ("Now choose your secret number, between " + minRange + " : "+ upperRange + "\nI won't peek, I promise... ");
      console.log("Great! Hmmmm, okay let me get to guessing...")

      // Next step in process: computer guessing the user's secret number
      function compGuess (){
        let calcOne = (upperRange - userSecretNum);
        //this log function doesn't work as it should
        let compGuessOne = Math.round((Math.log2(calcOne))+1);
        console.log("My first guess is: " + compGuessOne);
        return compGuessOne;
      }
      compGuess();
    
    // Question time - Higher, Lower or Correct? 
    // if H/L: resetting the high/low end of the range to guessed number
    async function highOrLow(){
      let userAnswerOne = await ask ("Is my guess (H)igher, (L)ower than your number or am I (C)orrect? ");
      
      if (userAnswerOne === "H" || userAnswerOne === "h"){
        console.log("Oh shucks - higher! Okay, let me try again...");
        //?How do I get the value for compGuessOne here?
        //Use this value for resetting the upper range of the    

      } else if (userAnswerOne === "L" || userAnswerOne === "l"){
        console.log("Got it - lower! Okay, let me try again...");

      } else if (userAnswerOne === "C" || userAnswerOne === "c"){
        console.log("Whoop! Whoop! - I got it right.") 
        //!end here, ask if user would like to play again - loop back to beginning (call start();)

      }else{
        console.log("I didn't quite catch your answer, could you please try again?")
        highOrLow();
      }
      
        
      }
      highOrLow();
     
    }
      start();
  

//Math.floor() function returns the largest integer less than or equal to a given number



  // parseInt(upperRange) - how could/should I use this?
  // ask.then()
  //   
    


  // process.exit();


// userInputOne();

  // if(secretNumber2 === secretNumber)
  //   console.log("WOW! I guess it right - the number you chose was: " + secretNumber2);
 // else if (secretNumber2 > secretNumber){
  //   console.log("")


  // let secretNumber2 = parseInt(secretNumber)

// use rl.then?
// function range(){


// async function rangeDefine (){
//   console.log("")

//   let min = 1

//   let  = await ask ("Please choose any number, greater than " + min);
//   let userInputOne = parseInt(userInput);

//   console.log("Super! You chose the range:" + min + " to " + userInputOne)



// rangeDefine();

// Can have split - asycn funtion to handle human and/or computer guessing
// math.random()
// need async functions
// RangeError(message, options): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError/RangeError

//!(dot)then and (dot)catch functions need