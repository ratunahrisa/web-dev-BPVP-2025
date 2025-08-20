import express from 'express';
import url from "url";

const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get('/', (req, res) => {
        res.sendFile("./page/index.html", {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile("./page/about.html", {root: __dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile("./page/contact.html", {root: __dirname});
});

// app.use("*", (req, res) => {
//     res.status(404);
//     res.send("Halaman tidak ditemukan")
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});