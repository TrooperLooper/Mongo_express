import express from "express";
import mongoose from "mongoose";
import logger from "./logger.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/myfirstdatabase", {})
  .then(() => logger.info("MongoDB connected"))
  .catch((error) => logger.error(`MongoDB connection error: ${error}`));

const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    logger.info("Fetched all items successfully"); // Success log
    res.json(items);
  } catch (error) {
    logger.error(`Error fetching items: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/items", async (req, res) => {
  try {
    console.log("POST /items route executed"); // Debug log
    const newItem = new Item(req.body);
    await newItem.save();
    logger.info(`Item created successfully: ${JSON.stringify(newItem)}`);
    res.status(201).json(newItem);
  } catch (error) {
    logger.error(`Error creating item: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedItem) {
      logger.warn(`Item with id ${id} not found for update`);
      return res.status(404).json({ message: "Item not found" });
    }
    logger.info(`Item updated successfully: ${JSON.stringify(updatedItem)}`); // Success log
    res.json(updatedItem);
  } catch (error) {
    logger.error(`Error updating item: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      logger.warn(`Item with id ${id} not found for deletion`);
      return res.status(404).json({ message: "Item not found" });
    }
    logger.info(`Item deleted successfully: ${JSON.stringify(deletedItem)}`); // Success log
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    logger.error(`Error deleting item: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
  logger.info("Test log entry to combined.log");
});
