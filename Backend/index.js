const port = process.env.PORT || 4001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // For password hashing
require("dotenv").config(); // To load env vars from .env file

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files (images)
app.use('/images', express.static('upload/images'));

// Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://sauravsharma691999:Saurav691999@cluster0.hpkk6.mongodb.net/ECOMMERCE_REACT", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// User Schema and Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: {},
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// Product Schema and Model
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Subscriber = mongoose.model("Subscriber", {
  email: {
    type: String,
    required: true,
    unique: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

//Endpoint for the Emails

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  try {
    // Check for existing subscription
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, error: "Already subscribed" });
    }

    // Save to DB
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Subscription Error:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});


// Multer Storage Config
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Routes
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Image Upload
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Add Product
app.post('/addproduct', async (req, res) => {
  try {
    let lastProduct = await Product.findOne().sort({ id: -1 });
    let id = lastProduct ? lastProduct.id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, name: product.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Get All Products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Remove Product
app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, message: "Product removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// User Signup
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      name,
      email,
      password: hashedPassword,
      cartData: cart,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret_ecom');
    res.status(201).json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// User Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret_ecom');
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

//Newsletter



// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
