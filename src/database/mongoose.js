const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const clusterName = "todo-list";

mongoose.set("strictQuery", false);

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${clusterName}.5lgwhrd.mongodb.net/?retryWrites=true&w=majority`;

const connectionOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
}

module.exports = {
    connect: () => {
        console.log("Connecting to db...");

        mongoose.connect(connectionString, connectionOptions)
            .then((res) => console.log(`Connection successful: ${res}`))
            .catch((err) => console.log(`Connection failed: ${err}`));
    }
}
