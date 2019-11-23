import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '@mdi/react'
import { mdiCalendarClock } from '@mdi/js'

import styles from './SideBar.module.css'
console.log(styles)

const SideBar = ({ links, handleItemClick, title }) => (
  // <Container fluid style={{ height: '100%' }}>
  <Row style={{ height: '100%' }}>
    <Col className='bg-dark' md='3'>
        Some text
    </Col>
  </Row>

  // </Container>
)

SideBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func
}

export default SideBar
