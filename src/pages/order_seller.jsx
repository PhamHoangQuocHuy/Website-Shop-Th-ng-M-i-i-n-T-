import React from 'react'
import Home from './home_seller'
const order = () => {
    return <>
        <div className='d-flex pro-header'>
            <Home />
            <h2 className='mx-2 mt-2 '>Danh sách đơn hàng</h2>
        </div>
        <div className='order-details p-3'>
            <input className='py-2' type="text" name="madonhang" id="" placeholder='Nhập mã đơn hàng' />
            <span className='num-order'>Số đơn
                <select className="order-select mx-2 py-2 px-2">
                    <option value="kho1">1</option>
                    <option value="kho2">2</option>
                    <option value="kho3">3</option>
                </select>
            </span>
        </div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr >
                        <th><input type="checkbox" name="" id="" /></th>
                        <th >Mã đơn hàng</th>
                        <th >Tên khách hàng</th>
                        <th >Ngày đặt</th>
                        <th >Giá</th>
                        <th >Thanh toán</th>
                        <th >Tình trạng</th>
                        <th >Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.status}</td>
                            <td>
                                <button className="btn-action">Sửa</button>
                                <button className="btn-action">Xóa</button>
                            </td>
                        </tr>
                    ))} */}
                    <tr >
                        <td><input type="checkbox" name="" id="" /></td>
                        <td >#Kz025418</td>
                        <td >Mendercart</td>
                        <td >24/02/2024
                            04:05pm</td>
                        <td >$112</td>
                        <td >Mastercard</td>
                        <td >Processing</td>
                        <td >
                            <button className="btn btn-primary">Sửa</button>
                            <button className="btn btn-danger mx-2">Xóa</button>
                        </td>
                    </tr>
                    <tr >
                        <td><input type="checkbox" name="" id="" /></td>
                        <td >#Kz025418</td>
                        <td >Mendercart</td>
                        <td >24/02/2024
                            04:05pm</td>
                        <td >$112</td>
                        <td >Mastercard</td>
                        <td >Processing</td>
                        <td >
                            <button className="btn btn-primary">Sửa</button>
                            <button className="btn btn-danger mx-2">Xóa</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </>
}

export default order
