import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import styles from './ListItems.module.css'

const CustomerList = ({ customerList, handleClick }) => (
  <Row className={`rounded ${styles.list}`}>
    <Table striped bordered hover size="sm" className={`${styles.table}`}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Documento</th>
          <th>Aniversario</th>

        </tr>
      </thead>
      <tbody>
        {customerList && customerList.map((customer, index) => (
          <tr key={index} onClick={() => {
            handleClick(customer)
          }}>
            <td>{customer.name}</td>
            <td>{customer.document}</td>
            <td>{customer.birthday}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  </Row >
)

CustomerList.propTypes = {
  customerList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      document: PropTypes.string,
      birthday: PropTypes.string
    })
  ),
  handleClick: PropTypes.func
}

export default CustomerList
