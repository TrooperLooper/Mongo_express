import express, { json } from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myfirstdatabase", {});

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  if (!updatedItem) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(updatedItem);
});

app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Item.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json({ message: "Item deleted successfully" });
});

// Add this temporary route to see all items with their IDs
app.get("/debug", async (req, res) => {
  const items = await Item.find();
  console.log("All items:", items);
  res.json(items);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
