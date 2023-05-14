const model = require("../model/model");

exports.getAllData = (req, res) => {
  try {
    res.send(JSON.stringify(model.theData()));
  } catch (error) {
    res.send(error.message);
  }
};

exports.postData = (req, res) => {
  try {
    const newFile = req.body;
    const result = model.saveData(newFile);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.deleteStd = (req, res) => {
  try {
    const { _id } = req.params;
    const result = model.deleteStd(_id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.updatedStd = async (req, res) => {
  try {
    const updatedData = req.body;
    const result = await model.updateStd(updatedData);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
