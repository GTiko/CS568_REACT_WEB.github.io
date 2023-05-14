const data = require("../data.json");
// const path = require("path");
const fs = require("fs");

class Student {
  static theData() {
    try {
      return data;
    } catch (error) {
      return error;
    }
  }
  static saveData(newData) {
    try {
      data.push(newData);
      fs.writeFileSync("data.json", JSON.stringify(data), (err) => {
        console.log("error");
      });
      // console.log(first)
      return "Student added successfully";
    } catch (error) {
      return error;
    }
  }
  static deleteStd(_id) {
    try {
      const undeleted = data.filter((each) => each._id !== _id);
      fs.writeFileSync("data.json", JSON.stringify(undeleted), (err) => {
        console.log("error");
      });
      return "Student deleted successfully";
    } catch (error) {
      return error;
    }
  }
  static updateStd(updatedData) {
    try {
      let index;
      let newData = [...data];
      for(let i=0; i< newData.length; i++){
        if(newData[i]._id === updatedData._id){
          index = i;
          break;
        }
      }

      newData.splice(index,1,updatedData);
      console.log(newData);
      fs.writeFileSync("./data.json", JSON.stringify(newData), (err) => {
        console.log("error");
      });
      return "Student updated successfully";
    } catch (error) {
      return error;
    }
  }
}
module.exports = Student;
