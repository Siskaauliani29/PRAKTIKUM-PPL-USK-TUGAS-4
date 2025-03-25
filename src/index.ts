import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface Item {
    id: number;
    name: string;
    category: string;
    description: string;
}

let items: Item[] = [
    { id: 1, name: "One Piece", category: "Manga", description: "Petualangan bajak laut mencari One Piece" },
    { id: 2, name: "Naruto", category: "Anime", description: "Seorang ninja yang bercita-cita menjadi Hokage" }
];

// Mendapatkan semua item
app.get("/items", (req, res) => {
    res.json({ data: items });
});

// Mendapatkan satu item berdasarkan ID
app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((item) => item.id === id);
    if (item) {
        res.json({ data: item });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// Menambahkan item baru
app.post("/items", (req, res) => {
    const newItem: Item = {
        id: items.length + 1,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description
    };
    items.push(newItem);
    res.status(201).json({ message: "Item added successfully", data: newItem });
});

// Mengupdate item
app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
        items[itemIndex] = { ...items[itemIndex], ...req.body };
        res.json({ message: "Item updated successfully", data: items[itemIndex] });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// Menghapus item
app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter((item) => item.id !== id);
    res.json({ message: "Item deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});