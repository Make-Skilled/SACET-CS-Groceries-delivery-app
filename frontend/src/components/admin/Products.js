import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/products');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/products', newProduct);
      fetchProducts();
      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: ''
      });
    } catch (err) {
      setError('Failed to add product');
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/products/${productId}`);
      fetchProducts();
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Products</h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder="Stock"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border p-2 rounded md:col-span-2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors md:col-span-2"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-green-600 font-semibold">₹{product.price}</span>
              <span className="text-gray-500">Stock: {product.stock}</span>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
              <span className="text-gray-500">{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
