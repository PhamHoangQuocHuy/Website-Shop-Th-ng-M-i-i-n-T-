import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import sp1 from '../assets/images/sp1.jpg';
import Home from './home_seller';

const Products = () => {
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        code: '',
        quantity: '',
        price: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setProducts([...products, newProduct]);
        setNewProduct({ name: '', code: '', quantity: '', price: '' }); // Reset form fields
        setShowForm(false); // Optionally close form on submit
    };

    const handleShowForm = () => setShowForm(true);
    const handleCancel = () => {
        setNewProduct({ name: '', code: '', quantity: '', price: '' });
        setShowForm(false);
    };

    return (
        <>
            <div className='d-flex pro-header'>
                <Home />
                <h2 className='mx-4 mt-2'>Danh sách sản phẩm</h2>
            </div>
            <div className='order-details'>
                <input className='py-2' type="text" name="madonhang" id="" placeholder='Nhập mã sản phẩm hoặc tên sản phẩm' />
                <div className="filters">
                    <div className="filter">
                        <select className="filter-select">
                            <option value="">Đang kinh doanh</option>
                            <option value="shirts">Áo</option>
                            <option value="pants">Quần</option>
                        </select>
                    </div>
                </div>

                <div className="filters">
                    <div className="filter">
                        <select className="filter-select">
                            <option value="">Danh mục</option>
                            <option value="shirts">Áo</option>
                            <option value="pants">Quần</option>
                        </select>
                    </div>
                </div>
                <div className="filters">
                    <div className="filter">
                        <select className="filter-select">
                            <option value="">Nhà sản xuất</option>
                            <option value="shirts">Áo</option>
                            <option value="pants">Quần</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <button className='btn-add mb-4' onClick={handleShowForm}><AiOutlinePlus className='add-icon' /> Tạo sản phẩm</button>
                    <button className='btn-find mb-4'><BiSearch className='add-icon' /> Tìm kiếm</button>
                </div>
            </div>
            {showForm && (
                <div className="product-form-container">
                    <form onSubmit={handleSubmit} className="product-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input id="name" type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Mã sản phẩm</label>
                                <input id="code" type="text" name="code" value={newProduct.code} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className="form-group">
                                <label htmlFor="code">Hình ảnh</label>
                                <input id="code" type="file" name="code" value={newProduct.code} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Danh mục</label>
                                <input id="price" type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="quantity">Số lượng</label>
                                <input id="quantity" type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá</label>
                                <input id="price" type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className="form-group">
                                <label htmlFor="price">Nhà sản xuất</label>
                                <input id="price" type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                            </div>

                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-save">Lưu sản phẩm</button>
                            <button type="button" onClick={handleCancel} className="btn-cancel">Hủy</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Tên sản phẩm</th>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>SL</th>
                            <th>Giá</th>
                            <th>Danh mục</th>
                            <th>Nhà sản xuất</th>
                            <th>Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td><input type="checkbox" /></td>
                                <td>{product.name}</td>
                                <td>{product.code}</td>
                                <td><img src={sp1} alt="Product" /></td>
                                <td>{product.quantity}</td>
                                <td>{product.price}$</td>
                                <td>Áo</td>
                                <td>Calvin Klein</td>
                                <td>
                                    <button className="btn btn-primary">Sửa</button>
                                    <button className="btn btn-danger mx-2">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Products;


