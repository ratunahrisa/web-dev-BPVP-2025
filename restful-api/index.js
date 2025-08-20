const express = require('express');
const app = express();
const port = 3001;
const productRoutes = require('./routes/product.route')

app.use(express.json()); // Middleware parsing JSON
app.use('/products', productRoutes); // Prefix endpoint

app.get('/', (req, res) => {
    res.send('Ini root page')
});

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})