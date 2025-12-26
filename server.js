const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let products = [];

app.post("/products", (req, res) => {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newProduct = { id: products.length + 1, name, price, image };
    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
});

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
