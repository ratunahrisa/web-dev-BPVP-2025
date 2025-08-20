let products = [
    {id: 1, name: "Produk A", price: 10000},
    {id: 2, name: "Produk B", price: 15000}
];


// Method Get All
exports.getAllProducts = (req, res) => {

    // kasih status 200 (success)
    res.status(200).json(products);
}

// Method Get One by ID
exports.getProductById = (req, res) => {

    // parse id yang dikasih ke integer
    const id = parseInt(req.params.id);

    // cari id product
    const product = products.find(p => p.id === id);

    // kalau ga ada product, kasih status 404 dan pesan
    if (!product) return res.status(404).json({message: 'Produk tidak ditemukan'});

    // kalau ada kasih status 200 dan isi product nya
    res.status(200).json(product);
}

// Method Create Product
exports.createProduct = (req, res) => {

    // ambil variable name dan price dari body request
    const {name, price} = req.body

    // validasi nama product dan tipe data harga
    if (!name || typeof price !== 'number') {
        // kasih status error 400 dan pesan
        return res.status(400).json({message: 'Input tidak valid'});
    }

    // bikin product baru
    const newProduct = {
        // bikin unique id (increment) otomatis. cek list id yang uda ada, masukin ke array baru,
        // ambil angka paling gede (max), lalu tambah 1. kalau gaada, id nya 1
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        price
    }

    products.push(newProduct);

    // tampilkan status sukses dan product yang baru dibuat
    res.status(201).json(newProduct);
}


// Method Ambil Product
exports.updateProduct = (req, res) => {

    // parse id yang dikasih ke integer
    const id = parseInt(req.params.id);

    // cari id product
    const product = products.find(p => p.id === id);

    // kalau ga ada product, kasih status 404 dan pesan
    if (!product) return res.status(404).json({message: 'Product tidak ditemukan'});

    // ambil variable name dan price dari body request
    const {name, price} = req.body;

    // validasi nama product dan tipe data harga
    if (!name || typeof price !== 'number') {
        return res.status(404).json({message: 'Input tidak valid'});
    }

    // edit product sesuai variable masing masing
    product.name = name;
    product.price = price;

    // tampilkan status sukses dan product yang baru diedit
    res.status(200).json(product);
}


// Method Delete Product
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({message: 'Product tidak ditemukan'});

    products.splice(index, 1);
    res.status(204).send();
}

