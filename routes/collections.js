const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collectionController");
const upload=require('../middlewares/multerCloudinary')
router.get("/collections", collectionController.collectionPage);
router.get("/api/collections", collectionController.getAllCollections);
router.post("/api/collections",upload.single('image'),collectionController.createCollection);
router.get("/collections/new", collectionController.newCollection);
router.get("/collections/edit/:id", collectionController.getApiCollection);
router.post("/api/collections/:id", collectionController.updateCollection);
router.delete("/api/collections/:id", collectionController.deleteCollection);
module.exports = router;
