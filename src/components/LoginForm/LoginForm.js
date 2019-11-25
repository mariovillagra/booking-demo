import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import styles from './LoginForm.module.css'

const LoginForm = ({ title, handleSubmit, loading }) => {
  const [values, setValues] = useState({})
  const handleChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }
  return (
    <Row className={`${styles.loginForm}`}>
      <Col md="3" className={`d-flex align-items-center text-center ${styles.title}`}>
        <h2>{title}</h2>
      </Col>
      <Col md="3" className={`${styles.form}`}>
        <div className="font-weight-bold" style={{ marginTop: '10px' }}>Ingresar a {title}</div>

        <Form style={{ marginTop: '10px' }} onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(values)
        }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name='username'
              type="text"
              placeholder="Usuario"
              value={values.username || ''}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              name="pass"
              type="password"
              placeholder="Contraseña"
              value={values.pass || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="theme" type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

LoginForm.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default LoginForm
