# Simple API

Simple API menggunakan **Express** dan **TypeScript** untuk mengelola data berbasis JSON.

## 🚀 Fitur
- Melihat semua item (`GET /items`)
- Melihat satu item (`GET /items/:id`)
- Menambahkan item baru (`POST /items`)
- Mengupdate item (`PUT /items/:id`)
- Menghapus item (`DELETE /items/:id`)

## 🛠️ Instalasi & Menjalankan Server

1. **Clone repository**
   ```bash
   git clone https://github.com/USERNAME/simple-api.git
   cd simple-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan server**
   ```bash
   npm run dev
   ```

Server akan berjalan di `http://localhost:3000`

## 🔥 Contoh Request

### **1️⃣ Mendapatkan Semua Item**
```bash
GET /items
```
Response:
```json
{
    "data": [
        { "id": 1, "name": "One Piece", "category": "Manga", "description": "Petualangan bajak laut mencari One Piece" }
    ]
}
```

### **2️⃣ Menambahkan Item Baru**
```bash
POST /items
Content-Type: application/json
{
    "name": "Naruto",
    "category": "Anime",
    "description": "Seorang ninja yang bercita-cita menjadi Hokage"
}
```

### **3️⃣ Mengupdate Item**
```bash
PUT /items/1
Content-Type: application/json
{
    "description": "Petualangan bajak laut bersama Luffy"
}
```

### **4️⃣ Menghapus Item**
```bash
DELETE /items/1
```

