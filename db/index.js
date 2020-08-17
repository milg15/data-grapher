
//Here I'm using MongoDB Atlas
const mongoose = require('mongoose');



//Modificar el acceso a la base de datos o la base de datos
const URI = "mongodb+srv://temp-user:gCm7Vx4rmLh3BPAn@mycluster-vbf5m.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected…')
    })
    .catch(err => console.log(err))


const db = mongoose.connection
module.exports = db