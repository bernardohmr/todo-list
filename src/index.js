const app = require("./app");
const db = require("./database/mongoose");

db.connect();

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
