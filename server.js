//Require Express//
const express = require("express");
const app = express();

//Require Routes//
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

//PORT: 3001//
const PORT = process.env.PORT||3001;

//Uses or buildin  middleware//
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Api routes//
app.use("/api",apiroutes);
app.use("/",htmlroutes);

//App Listener through localhost//
app.listen(PORT,() => console.log(`listening on PORT ${PORT}`));