const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("✅ Connected to MongoDB");

  const sampleProducts = [
    {
      name: "Fresh Apples",
      price: 120,
      imageUrl: "https://via.placeholder.com/200x150?text=Apples",
      description: "Crisp and sweet apples.",
      category: "Fruits"
    },
    {
      name: "Brown Bread",
      price: 40,
      imageUrl: "https://via.placeholder.com/200x150?text=Bread",
      description: "Healthy and fresh brown bread.",
      category: "Bakery"
    },
    {
      name: "Milk 1L",
      price: 55,
      imageUrl: "https://via.placeholder.com/200x150?text=Milk",
      description: "Fresh cow milk - 1 liter.",
      category: "Dairy"
    }
  ];

  await Product.insertMany(sampleProducts);
  console.log("✅ Products added");
  mongoose.disconnect();
}).catch(err => console.error("❌ DB connection failed", err));

