const express = require('express');
const app = express();

const router = require("./routes/index");

app.use('/', ()=>console.log("call---------"),router);

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
