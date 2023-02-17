import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


//@desc     FETCH ALL PRODUCTS
//@route    /api/products
//@access   Public
const getProducts = expressAsyncHandler(async (request, response) => {
    const products = await Product.find({});
    // response.status(401)
    // throw new Error("Not Authorized")
    response.json(products);
})

//@desc     FETCH SINGLE PRODUCTS
//@route    /api/products/:id
//@access   Public
const getProductByID = expressAsyncHandler(async (request, response) => {
    const product = await Product.findById(request.params.id);

    if (product) {
        // throw new Error("Not Authorize")
        response.json(product);
    } else {
        response.status(404);
        throw new Error('Product not Found!');
    }
})

export { getProducts, getProductByID }