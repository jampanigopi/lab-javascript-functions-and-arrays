// Progression #1: Greatest of the two numbers
const greatestOfTwoNumbers = (x, y) => {
  var greatest = x > y ? x : y;
  return greatest
};


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const findScaryWord = (wordsArr) => {
  if (wordsArr.length == 0) {
      return null;
  } else {
      const hmap = {};
      let max = 0;
      let maxLength = '';
      for (const i of wordsArr) {
          hmap[i] = i.length;
      }

      for (const key in hmap) {
          if (hmap.hasOwnProperty(key)) {
              if (hmap[key] > max) {
                  max = hmap[key];
                  maxLength = key;
              }
          }
      }
      return maxLength;
  }
};





// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const netPrice = (prices) => {
  const sum = prices.reduce((previous, current) => {
      previous += current;
      return previous;
  }, 0);
  return sum;
};

// Progression #3.1: Bonus
const add = (mixedArr) => {
  let sum = 0;
  for (const i of mixedArr) {
      let num = 0;
      if (typeof i == 'string') {
          num = i.length;
      } else if (typeof i == 'boolean') {
          num = i == true ? 1 : 0;
      } else if (typeof i == 'number') {
          num = i;
      } else if (typeof i == 'object') {
          throw new Error("Unsupported data type sir or ma'am");
      }
      sum += num;
  }
  return sum;
};




// Progression #4: Calculate the average

const midPoint = (arr) => {
    let sum = sumOfArray(arr);
    return sum / arr.length;
};



// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const midPointOfLevels = (arr) => {
  if (arr.length == 0) {
      return null;
  } else {
      const calculateSum = arr.reduce((previous, current) => {
          previous += current;
          return previous;
      }, 0);
      return calculateSum / arr.length;
  }
};


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = (items) => {
  if (items.length == 0) {
      return null;
  } else {
      let sum = 0;
      for (const i of items) {
          let currLength = i.length;
          // console.log(currLength);
          sum += currLength;
      }
      return sum / items.length;
  }
  // return Math.floor(sum / items.length);
};
// Bonus
const avg = (mixedArr) => {
  if (mixedArr.length == 0) {
      return null;
  } else {
      let sum = 0;
      for (const i of mixedArr) {
          let num = 0;
          if (typeof i == 'string') {
              num = i.length;
          } else if (typeof i == 'boolean') {
              num = i == true ? 1 : 0;
          } else {
              num = i;
          }
          sum += num;
      }
      k = parseFloat((sum / mixedArr.length).toFixed(2));
      return k;
  }
};


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

const uniqueArray = (arr) => {
  if (arr.length == 0) {
      return null;
  } else {
      var set = new Set(arr);
      return Array.from(set);
  }
};


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const searchElement = (wordArr, wordToBeSearched) => {
  if (wordArr.length == 0) {
      return null;
  } else {
      for (const i of wordArr) {
          if (i == wordToBeSearched) {
              return true;
          }
      }
      return false;
  }
};


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const howManyTimesElementRepeated = (wordArr, wordToBeSearched) => {
  if (wordArr.length == 0) {
      return 0;
  } else {
      hmap = {};
      for (const i of wordArr) {
          if (hmap[i]) {
              hmap[i] += 1;
          } else {
              hmap[i] = 1;
          }
      }
      getFrequency = hmap[wordToBeSearched] ? hmap[wordToBeSearched] : 0;
      return getFrequency;
  }
};


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
var lenConst = 4;

const sum = (arr) => {
    const sum = arr.reduce((previous, current) => {
        previous *= current;
        return previous;
    }, 1);
    return sum;
};

const getMax = (horz, vert) => {
    let sumHorz = sum(horz);
    let sumVert = sum(vert);
    // console.log(sumVert, sumHorz);
    let max = sumHorz > sumVert ? sumHorz : sumVert;
    return max;
};

const getRowArr = (mat, rowPos, colPos) => {
    let ls = mat[rowPos].slice(colPos, colPos + lenConst);
    return ls;
};

const getColArr = (mat, rowPos, colPos) => {
    let ls = [];
    for (let i = rowPos; i < rowPos + lenConst; i++) {
        let elem = mat[i][colPos];
        ls.push(elem);
    }
    return ls;
};

const maximumProduct = (matrix) => {
    var max = 0;
    let check = matrix.length - lenConst;
    for (let rows = 0; rows < matrix.length; rows++) {
        for (let cols = 0; cols < matrix[0].length; cols++) {
            if (cols <= check) {
                var horz = getRowArr(matrix, rows, cols);
            }
            if (rows <= check) {
                var vert = getColArr(matrix, rows, cols);
            }
            const curr = getMax(horz, vert);
            if (curr > max) {
                max = curr;
            }
        }
    }
    return max;
};


