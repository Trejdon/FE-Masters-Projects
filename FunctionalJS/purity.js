// Are the following functions pure or impure?

function getDate() {
  return new Date().toDateString();
}

// getDate is impure as it relies on an outside construct, global time, for its return value

function getWorkshopDate () {
  return new Date(2020, 11, 4).toDateString();
}

// GetWorkshopDate is pure, the output relies on nothing outside of the function and returns the same value every time given any argument.

function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, '0');
}

// toHex is pure, the output will always be the same given the same input

function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}

// rbgToHex is pure

function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById('color-me');
  colorMe.setAttribute('style', 'color: ' + hex);
}

// setColor is impure, it has side effects that change state outside of itself

async function readJsonFile(filename) {
  const file = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
  );
  return await file.json();
}

//readJsonFile is impure, the output of the fetch can change depending on the state (success/error)

function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}

// writeJsonString is pure


function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}

// exclusiveOr is pure

function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}

// computeTruthTable is pure

function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}

// showTruthTable is impure, the console logging changes the global state