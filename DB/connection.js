const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect(process.env.URL).then(() => console.log('Connected!'));