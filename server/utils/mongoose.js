const mongoose = require("mongoose");
const fileSystem = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "waiters1.json")
const data = fileSystem.readFileSync(fileName, 'utf8');
const jsonDataset = JSON.parse(data);
const fileCollectionName = Object.keys(jsonDataset)[0];
const documents = jsonDataset[fileCollectionName];
//const Staff = require(path.join(__dirname, 'waiters1.json'));
//import { waiters } from "../data/data";
/* import waiters from "../data/waiters1.json" assert {type: 'json'}; */
/* const waiters = import(fileName , {
  assert: {
      type: 'json'
  }
}); */

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
      await mongoose.connection.collection(collectionName).drop();
      await mongoose.connection.collection(collectionName).insertMany([collectionData]); 
    } catch (error) {
      if (error.message !== 'ns not found') {
        throw error;
      }
    }
  }


/* const connectDB = async () => {
  try {
    //connect to db
    const dbURL = "mongodb://localhost/staff"
    const db = await mongoose.connect(dbURL);
  
    //reset collections
    await resetCollection(db, "waiters", "./../data/waiters1.json");
    //await resetCollection(db, 'users', './test/users.json');
  
  } catch (error) {
    console.error(error);
  }
} */

/* const resetCollection = async (db, dbCollectionName, fileName) => {
  const data = fileSystem.readFileSync(fileName, 'utf8');
  const jsonDataset = JSON.parse(data);
  const fileCollectionName = Object.keys(jsonDataset)[0];
  const documents = jsonDataset[fileCollectionName];
  try {
    await db.collection(dbCollectionName).drop();
    await db.collection(dbCollectionName).insertMany(fileName);
  } catch (error) {
    if (error.message !== 'ns not found') {
      throw error;
    }
  }
} */

/*   mongoose
  .connect(dbURL)
  .then(() => {
    resetCollection('waiters', './../data/waiters1.json');
  })
  .catch(err => console.log(err)); */