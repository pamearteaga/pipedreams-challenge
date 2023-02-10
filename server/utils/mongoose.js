const mongoose = require("mongoose");
//const fileSystem = require("fs");
//const path = require("path");
//const fileName = path.join(__dirname, "waiters1.json")
//const data = fileSystem.readFileSync(fileName, 'utf8');
//const jsonDataset = JSON.parse(data);
//const fileCollectionName = Object.keys(jsonDataset)[0];
//const documents = jsonDataset[fileCollectionName];

mongoose
  .connect("mongodb://localhost/staff")
  .then(() => {
    resetCollection(
      "waiters",
      {
        "monday": ["Howard", "Martin", "Michael", "Bert"],
        "tuesday": ["Roy", "Herbert", "Jacob", "Tom", "Elmer", "Carl", "Lee"],
        "wednesday": ["Peter", "Benjamin", "Frederick", "Willie", "Alfred", "Sam"],
        "thursday": ["Will", "Jesse", "Oscar", "Lewis"],
        "friday": ["Herman", "Jim", "Francis", "Harvey", "Earl", "Eugene", "Ralph", "Ed"],
      }
    );
    resetCollection(
      "cooks",
      {
        "monday": ["John", "William", "James", "Charles"],
        "tuesday": ["George", "Frank", "Joseph"],
        "wednesday": ["Thomas", "Henry", "Robert", "Edward", "Harry", "Walter"],
        "thursday": ["Albert", "Samuel", "David", "Louis", "Joe", "Charlie"],
        "friday": ["Clarence", "Richard", "Andrew", "Daniel", "Ernest"],
      }
    );
  })
  .catch((err) => console.log(err));


  const resetCollection = async (collectionName, collectionData) => {
    try {
      //Reset the collections
      await mongoose.connection.collection(collectionName).drop();
      //Insert new data
      await mongoose.connection.collection(collectionName).insertMany([collectionData]); 
    } catch (error) {
      if (error.message !== 'ns not found') {
        throw error;
      }
    }
  }

