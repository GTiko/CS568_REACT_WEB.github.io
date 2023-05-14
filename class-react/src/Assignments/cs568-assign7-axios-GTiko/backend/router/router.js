const controller = require("../controller/controller");
const express = require("express");
const router = express.Router();

router.get("/", controller.getAllData);
router.post("/", controller.postData);
router.delete("/:_id", controller.deleteStd);
router.patch("/", controller.updatedStd);

module.exports = router;