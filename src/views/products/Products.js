import React from 'react'
import c from './Products.module.scss'

const Products = () => {
  return (
    <>
      <section className={c.contentHeader}>
        <h5>Danh sách sản phẩm</h5>
        <div>
          <a
            className="btn btn-primary btn-sm"
            href="https://store.com/admin/product/insert"
            role="button"
          >
            <span className="glyphicon glyphicon-plus"></span> Thêm mới
          </a>{' '}
          <a
            className="btn btn-primary btn-sm"
            href="https://store.com/admin/product/recyclebin"
            role="button"
          >
            <span className="glyphicon glyphicon-trash"></span> Thùng rác(0)
          </a>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box" id="view">
              <div className="box-header with-border">
                <div className="box-body">
                  <div className="row">
                    <div className="table-responsive">
                      <input
                        type="text"
                        className="form-control timkiem"
                        placeholder="Nhập tên sản phẩm cần tìm..."
                      />
                      <br />
                      <table className="table table-hover table-bordered">
                        <thead>
                          <tr>
                            <th className="text-center">ID</th>
                            <th>Hình</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng trong kho</th>
                            <th>Loại sản phẩm</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Nhập hàng</th>
                            <th className="text-center" colSpan="2">
                              Thao tác
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">40</td>
                            <td style={{ width: '70px' }}>
                              <img
                                src="public/images/products/ea24d2d8e979472723d5c8b40d1d8ef3.jpg"
                                alt="Điện thoại iPhone 14 Pro 128GB"
                                className="img-responsive"
                              />
                            </td>
                            <td>Điện thoại iPhone 14 Pro 128GB</td>
                            <td className="text-center"> 100</td>
                            <td>Apple</td>
                            <td className="text-center">
                              <a href="https://store.com/admin/product/status/40">
                                <span className="glyphicon glyphicon-ok-circle mauxanh18"></span>
                              </a>
                            </td>
                            <td className="text-center">
                              <a
                                className="btn btn-info btn-xs"
                                href="admin/product/import/40"
                                role="button"
                              >
                                <span className="glyphicon glyphicon-trash"></span>Nhập hàng
                              </a>
                            </td>
                            <td className="text-center">
                              <a
                                className="btn btn-success btn-xs"
                                href="https://store.com/admin/product/update/40"
                                role="button"
                              >
                                <span className="glyphicon glyphicon-edit"></span> Sửa
                              </a>
                            </td>
                            <td className="text-center">
                              <a
                                className="btn btn-danger btn-xs"
                                href="https://store.com/admin/product/trash/40"
                                onClick="return confirm('Xác nhận xóa sản phẩm này ?')"
                                role="button"
                              >
                                <span className="glyphicon glyphicon-trash"></span> Xóa
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
