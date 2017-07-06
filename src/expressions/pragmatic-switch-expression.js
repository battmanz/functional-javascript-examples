const polygon = 'octagon';

// Again, each branch must have a `return` statement.
const numberOfSides = (() => {
  switch(polygon) {
    case 'triangle':
      return 3;
    case 'square':
    case 'rectangle':
      return 4;
    case 'pentagon':
      return 5;
    case 'hexagon':
      return 6;
    case 'heptagon':
      return 7;
    case 'octagon':
      return 8;
    default:
      // I can't count that high, so we'll just default it to Infinity.
      return Infinity;
  }
})();

console.log(numberOfSides);
