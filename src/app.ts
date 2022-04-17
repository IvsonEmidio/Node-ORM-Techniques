import express from "express";
import reportsRoutes from "./routes/reportsRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

reportsRoutes();


try {
    app.listen(port, () => {
        console.log(`successfully connect to port ${port}`);
    });
} catch (err) {
    console.error(`An error has ocurred when connecting on port ${port}.`)
}