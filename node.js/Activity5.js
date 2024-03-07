const fs=require ('fs');
const filePath='myData.txt';
const dataToWrite = "This is some sample data to write to the file.";
fs.writeFile(filePath, dataToWrite, (err) => {
 if (err) {
 console.error("Error writing to file:", err);
 } else {
 console.log("Data successfully written to file.");
 }


});
