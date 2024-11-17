require("dotenv").config();
const express = require("express");
const connectDB=require('./config/database')
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const helmet = require('helmet');
const crypto = require('crypto');
const path = require("path");
const app = express();
const methodOverride = require('method-override');
const homeRoutes = require("./routes/dashboard");
const productRoutes = require("./routes/products");
const collectionRoutes = require("./routes/collections");
const orderRoutes = require("./routes/orders");
const customerRoutes = require("./routes/customers");
const userRoutes = require("./routes/users");
//database
connectDB();
//view
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");
app.set('views', path.join(__dirname, 'views'));
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
//route
app.use("/", homeRoutes);
app.use(productRoutes);
app.use(collectionRoutes);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
//port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[server] running on port: http://localhost:${PORT}`);
});
