import Building from './5-building.js';

const b = new Building(100);
console.log(b); // Output: Building { _sqft: 100 }

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
  // Output: Error: Class extending Building must override evacuationWarningMessage
}

