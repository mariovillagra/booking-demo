import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import styles from './ListItems.module.css'

const ProductList = ({ productList, handleClick }) => (
  <Row className={`rounded ${styles.list}`}>
    <Table striped bordered hover size="sm" className={`${styles.table}`}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Valor</th>

        </tr>
      </thead>
      <tbody>
        {productList && productList.map((product, index) => (
          <tr key={index} onClick={() => {
            handleClick(product)
          }}>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.value}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  </Row >
)

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number
    })
  ),
  handleClick: PropTypes.func
}

export default ProductList
