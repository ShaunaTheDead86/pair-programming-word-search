const wordSearch = (letters, word) => {
  const firstLetterPositions = findFirstLetterPositions(letters,word[0]);

  for (const positions of firstLetterPositions) {
    let startPos = [positions[0],positions[1]];
    if (checkAllDirections(letters,word,startPos)) {
      return true;
    }
  }
  return false;
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
  if (checkX(array,word,start) || checkY(array,word,start) || checkXAndY(array,word,start)) {
    return true;
  }
  return false;
};

const checkX = function(array,word,start) {
  for (const directionX of [-1, 1]) {
    let currentPos = [start[0], start[1] + directionX];
    let letterIndex = 1;
    let step = 1;
    let currentXCondition = step < word.length && currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1;
    
    while (currentXCondition) {
      if (!nextLetterMatch(array,currentPos,word[letterIndex])) {
        break;
      }

      letterIndex++;
      if (foundWord(letterIndex,word)) {
        console.log(`found the word on X axis starting at this position ${start[0]},${start[1]}`);
        return true;
      }

      currentPos = [currentPos[0],currentPos[1] + directionX];
      currentXCondition = step < word.length && currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1;
      step++;
    }
  }
  return false;
};

const checkY = function(array,word,start) {
  for (const directionY of [-1, 1]) {
    let currentPos = [start[0] + directionY, start[1]];
    let letterIndex = 1;
    let step = 1;
    let currentYCondition = step < word.length && currentPos[0] >= 0 && currentPos[0] <= array.length - 1;
    
    while (currentYCondition) {
      if (!nextLetterMatch(array,currentPos,word[letterIndex])) {
        break;
      }

      letterIndex++;
      if (foundWord(letterIndex,word)) {
        console.log(`found the word on Y axis starting at this position ${start[0]},${start[1]}`);
        return true;
      }

      currentPos = [currentPos[0] + directionY,currentPos[1]];
      currentYCondition = step < word.length && currentPos[0] >= 0 && currentPos[0] <= array.length - 1;
      step++;
    }
  }
  return false;
};

const checkXAndY = function(array,word,start) {
  for (const directionY of [-1, 1]) {
    for (const directionX of [-1, 1]) {
      let currentPos = [start[0] + directionY, start[1] + directionX];
      let letterIndex = 1;
      let step = 1;
      let currentXCondition = step < word.length && currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1;
      let currentYCondition = step < word.length && currentPos[0] >= 0 && currentPos[0] <= array.length - 1;
    
      while (currentXCondition && currentYCondition) {
        if (!nextLetterMatch(array,currentPos,word[letterIndex])) {
          break;
        }

        letterIndex++;
        if (foundWord(letterIndex,word)) {
          
          if (directionY > 0) {
            if (directionX > 0) {
              console.log(`found the word on diagonal going down and right starting at this position ${start[0]},${start[1]}`);
              return true;
            } else {
              console.log(`found the word on diagonal going down and left starting at this position ${start[0]},${start[1]}`);
              return true;
            }
          } else {
            if (directionX > 0) {
              console.log(`found the word on diagonal going up and right starting at this position ${start[0]},${start[1]}`);
              return true;
            } else {
              console.log(`found the word on diagonal going up and left starting at this position ${start[0]},${start[1]}`);
              return true;
            }
          }
        }

        currentPos = [currentPos[0] + directionY,currentPos[1] + directionX];
        currentXCondition = step < word.length && currentPos[1] >= 0 && currentPos[1] <= array[0].length - 1;
        currentYCondition = step < word.length && currentPos[0] >= 0 && currentPos[0] <= array.length - 1;
        step++;
      }
    }
  }
  return false;
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
