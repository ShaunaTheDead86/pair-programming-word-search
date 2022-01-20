const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true for diagonal down and left", function() {  // check diagonal down and left
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'S'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'E', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'I', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true for diagonal down and right", function() {  // check diagonal down and right
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'E'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true for diagonal up and right", function() {  // check diagonal up and right
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'D'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'E'],
      ['Y', 'F', 'I', 'F', 'Q', 'E', 'E', 'L'],
      ['H', 'M', 'J', 'N', 'F', 'F', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'N', 'E', 'R', 'L'],
      ['B', 'F', 'I', 'I', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'E', 'W', 'A', 'P', 'L', 'I'],
      ['S', 'S', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true for diagonal up and left", function() {  // check diagonal up and left
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'L', 'I', 'N', 'F', 'E', 'L', 'E'],
      ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'F', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'N', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'I', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'E', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true for diagonal down and left", function() {  // check diagonal down and left
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'S'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'A', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'B', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'C', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'D', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'F', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['G', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABCDEFG');

    assert.isTrue(result);
  });

  it("should return true for diagonal down and right", function() {  // check diagonal down and right
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'I', 'N', 'F', 'E', 'L', 'E'],
      ['Y', 'F', 'B', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'C', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'D', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'F', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'G'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABCDEFG');

    assert.isTrue(result);
  });

  it("should return true for diagonal up and right", function() {  // check diagonal up and right
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'D'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'G'],
      ['Y', 'F', 'I', 'F', 'Q', 'E', 'F', 'L'],
      ['H', 'M', 'J', 'N', 'F', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'D', 'E', 'R', 'L'],
      ['B', 'F', 'I', 'C', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'B', 'W', 'A', 'P', 'L', 'I'],
      ['S', 'A', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABCDEFG');

    assert.isTrue(result);
  });

  it("should return true for diagonal up and left", function() {  // check diagonal up and left
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'G', 'I', 'N', 'F', 'E', 'L', 'E'],
      ['Y', 'F', 'F', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'E', 'E', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'D', 'D', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'C', 'C', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'B', 'B', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'A'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABCDEFG');

    assert.isTrue(result);
  });
});
