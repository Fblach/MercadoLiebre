const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


function leerJson(){
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}

function guardarJson(){
	let arrayProducts = leerJson();
	fs.writeFileSync
}

let products = leerJson();

const controller = {
	// Root - Show all products
	root: (req, res) => {
		// Do the magic
		return res.render('products', {products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		let product = products.find(function(product){
			return product.id == req.params.productId
		})

		return res.render('detail', {product});
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		let productToEdit = products.find(function(productToEdit){
			return productToEdit.id == req.params.productId
		})

		return res.render('product-edit-form', {productToEdit});

	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let product = products.find(function(product){
			return product.id == req.params.productId
		})

		return res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		/*let deleteProduct = products.find(function(product){
			return product.id == req.params.productId
		})
		let deleting = products.indexOf(deleteProduct);
		products.splice(deleting, 1);*/

	}
};

module.exports = controller;