const express = require('express');
const connectDb = require('./mongodb.client');
const productRouter = require('./routes/product.route');
require('./config/config')();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
connectDb().catch(console.dir);

app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send({ Ok: 'OK' });
});


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));