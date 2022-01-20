const wordSearch = (letters, word) => {
  const firstLetterPositions = findFirstLetterPositions(letters,word[0]); // find all positions for the first letter of the word

  for (const positions of firstLetterPositions) { // iterate through first letter positions
    let startPos = [positions[0],positions[1]];
    if (checkAllDirections(letters,word,startPos)) {  // search all directions from the position of the first letter
      return true;  // return true if the word is found at any point
    }
  }
  return false; // return false if the word is not found after all first letter positions are checked
};

const findFirstLetterPositions = function(array,letter) {
  const positions = [];
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (array[y][x] === letter) {
        positions.push([y,x]);
      }
    }
  }
  return positions;
};

const checkAllDirections = function(array,word,start) {
  for (const directionY of [0, -1, 1]) {  // 0 is looking in the first letter Y column, -1 is looking up, and 1 is looking down
    for (const directionX of [0, -1, 1]) {  // 0 is looking in the first letter X column, -1 is looking left, and 1 is looking right
      if (!(directionX === 0 && directionY === 0)) {  // if both are 0 then there is no search direction so skip that, but run all others

        // set all counters to look for the 2nd letter since we know the first letter has been found
        let currentPos = [start[0] + directionY, start[1] + directionX];
        let letterIndex = 1;
        let step = 1;

        // set intial while conditions
        let currentXCondition = currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1;
        let currentYCondition = currentPos[0] >= 0 && currentPos[0] <= array.length - 1;
        let stepCondition = step < word.length;
      
        while (currentXCondition && currentYCondition && stepCondition) {
          if (!nextLetterMatch(array,currentPos,word[letterIndex])) {
            // letters didn't match, word can't be in this direction, break out of the loop
            break;
          }

          // next letter matches, so increment letterIndex for the next letter
          letterIndex++;
          if (foundWord(letterIndex,word)) {  // check if the full word was found, if so display a log and return true
            displayConsoleLog(directionY,directionX,start);
            return true;
          }

          // set up next loop
          currentPos = [currentPos[0] + directionY,currentPos[1] + directionX]; // increment the current search position
          step++; // increment to the next step
          currentXCondition = currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1; // adjust X axis conditional
          currentYCondition = currentPos[0] >= 0 && currentPos[0] <= array.length - 1;  // adjust Y axis conditional
          stepCondition = step < word.length; // adjust step conditional
        }
      }
    }
  }
  return false;
};

const displayConsoleLog = function(directionY,directionX,start) {
  if (directionY === 1) {
    if (directionX === 1) {
      console.log(`found the word on diagonal going down and right starting at this position ${start[0]},${start[1]}`);
    } else if (directionX === 0) {
      console.log(`found the word on diagonal going down starting at this position ${start[0]},${start[1]}`);
    } else if (directionX === -1) {
      console.log(`found the word on diagonal going down and left starting at this position ${start[0]},${start[1]}`);
    }
  } else {
    if (directionX === 1) {
      console.log(`found the word on diagonal going up and right starting at this position ${start[0]},${start[1]}`);
    } else if (directionX === 0) {
      console.log(`found the word on diagonal going up starting at this position ${start[0]},${start[1]}`);
    } else if (directionX === -1) {
      console.log(`found the word on diagonal going up and left starting at this position ${start[0]},${start[1]}`);
    }
  }
};

const nextLetterMatch = function(array,currentPos,letter) {
  if (array[currentPos[0]][currentPos[1]] !== letter) {
    return false;
  }
  return true;
};

const foundWord = function(letterIndex,word) {
  if (letterIndex === word.length) {
    return true;
  }
  return false;
};

module.exports = wordSearch;
