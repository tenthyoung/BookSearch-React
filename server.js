const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/booksearchDB";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearchDB", {useNewUrlParser: true});


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//  Serve static assets if in production
if ( process.env.NODE_ENV === 'production' ) {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
