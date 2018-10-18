const fs = require('fs');

let allItems = []

// Read in CSV. readFileSync returns the CSV file as one long JavaScript string.
const csvFile = fs.readFileSync('../data/raw/education.csv','utf-8');

// Turn string into an array, using string's built-in "split" method.
// Splitting on newlines means we have now converted each row of the
// CSV into a member of a JS array instead.
const csvRows = csvFile.split("\n");

// Use array's built-in forEach method.
// map iterates over each member of the array, passing each member
// to a callback function.
csvRows.forEach(createReportItem);

// convert each row into JS object and save to allItems array.
function createReportItem(csvRow) {
  const keyValue = csvRow.split(",");

  // make sure you only have a key and value
  if (keyValue.length === 2) {
    const reportItem = { label: keyValue[0], value: keyValue[1]};

    allItems.push(reportItem);
  }
}
// Serialize the data into JSON, save it to the processed data folder.
fs.writeFileSync('../data/processed/education.json', JSON.stringify(allItems))

// export createReportItem for testing
module.exports = {
  createReportItem: createReportItem
}
