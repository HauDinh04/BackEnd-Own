const axios = require("axios");
const collection = require("../models/collection");

//render ra trang-done
exports.collectionPage = async (req, res) => {
  try {
    const respone = await axios.get("http://localhost:5000/api/collections");
    const collections = respone.data;
    res.render("pages/collection", {
      title: "collection page",
      collections: collections,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//render ra route/new -done
exports.newCollection = async (req, res) => {
  res.render("forms/collectionForm", {
    title: "create Collection",
    collection: null,
  });
};
//render ra tất cả list api-done
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await collection.find();
    res.status(200).json(collections);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("[GET]_collections", err);
  }
};
//post api + data lấy từ form-done
exports.createCollection = async (req, res) => {
  try {
    
    const { name, description } = req.body;
    const imageUrl = req.file.path;
    const newCollection = new collection({
      name,
      image:imageUrl,
      description,
    });
    await newCollection.save();
    res.redirect("/collections");
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("[POST]_createCollection", err);
  }
};
//get api theo id và hiển thị trong form -done
exports.deleteCollection = async (req, res) => {
  try {
    const deleted = await collection.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Collection not found" });
    }

    res.redirect("/collections");
  } catch (err) {
    console.error("Error in deleteCollection:", err);
    res.status(500).send("Server Error");
  }
};
//lấy api cũ bỏ vào form - done
exports.getApiCollection = async (req, res) => {
  try {
    const collectionData = await collection.findById(req.params.id);
    if (!collectionData) {
      return res.status(404).send("Collections not found");
    }
    res.render("forms/collectionForm", {
      title: "edit collection",
      collection: collectionData,
    });
  } catch (err) {
    console.error("error fetching collections", err);
    res.status(500).send("Server error");
  }
};
//update lại api nhưng đang sài hàm post. done
exports.updateCollection = async (req, res) => {
  try {
    const collectionId = req.params.id;
    const { name, image, description } = req.body;
    const updateCollection = await collection.findByIdAndUpdate(
      collectionId,
      { name, image, description },
      { new: true }
    );
    if (!updateCollection) {
      return res.status(404).send("Collection not found");
    }
    console.log("collection updated successfully", updateCollection);
    res.redirect("/collections");
  } catch (err) {
    console.error("Error fetching collections", err);
    res.status(500).send("server error");
  }
};
