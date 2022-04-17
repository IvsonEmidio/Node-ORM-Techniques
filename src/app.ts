import express from "express";

const app = express();
const port = 3000;



try {
    app.listen(port, () => {
        console.log(`successfully connect to port ${port}`);
    });
} catch (err) {
    console.error(`An error has ocurred when connecting on port ${port}.`)
}