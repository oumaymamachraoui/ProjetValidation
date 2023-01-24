const express = require("express");

const { getDocs, createDoc, updateDoc, deleteDoc, getDoc } = require("../controllers/documents");

const router = express.Router();

router.get("/get", getDocs);
router.post("/add", createDoc);
router.get("/get/:id", getDoc);
router.patch("/edit/:id", updateDoc);
router.delete("/delete/:id", deleteDoc);

module.exports = router;
