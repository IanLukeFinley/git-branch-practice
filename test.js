function cartPrice(items) {
  let total = 0; //create the total placeholder
  for (let i = 0; i < items.length; i++) {
    //loop through items
    total = total + items[i].price; //at each step add cart[i].price to total
  }
  return total; //return total
}

function mostExpensiveItemName(items) {
  let selectedName = undefined; //create itemName placeholder
  let lastPrice = 0; //create lastPrice placeholder at 0
  for (let i = 0; i < items.length; i++) {
    //loop through items
    if (items[i].price > lastPrice) {
      //if items[i].price > lastPrice:
      selectedName = items[i].itemName; //itemsName becomes items[i].name
      lastPrice = items[i].price; //lastPrice becomes items[i].price
    }
  }
  return selectedName; //after the loop, return itemName
}

function priceLookup(items, name) {
  let selectedPrice = 0; //create selectedPrice placeholder
  for (let i = 0; i < items.length; i++) {
    //loop through items
    if (items[i].itemName == name) {
      //if items[i]itemName matches name
      selectedPrice = items[i].price; //selectedPrice becomes items[i].price
      return selectedPrice; //and return selectedPrice right then to stop!
    }
  }
  return undefined; //after loop, return undefined, because nothing matched
}

function filterAnswersByType(answers) {
  let output = []; //create empty output array
  for (let i = 0; i < answers.length; i++) {
    //loop the answers
    if (answers[i].isEssayQuestion == true) {
      //if answers[i].isEssayQuestion == true
      output.push(answers[i]); //push answers[i] into output
    }
  }
  return output; //after the loop, return the output
}

function findAnswer(answers, quote) {
  for (let i = 0; i < answers.length; i++) {
    //loop through items
    if (answers[i].question == quote) {
      //if items[i]itemName matches name
      return answers[i]; //and return selectedPrice right then to stop!
    }
  }
  return undefined; //after loop, return undefined, because nothing matched
}

function checkForPlagiarism(answers, quote) {
  for (let i = 0; i < answers.length; i++) {
    //loop through the answers
    if (
      answers[i].isEssayQuestion == true &&
      answers[i].response.includes(quote)
    ) {
      //if both requirements
      return true;
    }
  }
  return false;
}
