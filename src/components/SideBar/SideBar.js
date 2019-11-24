import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '@mdi/react'
import { mdiCalendarClock } from '@mdi/js'

import styles from './SideBar.module.css'

const SideBar = ({ links, handleItemClick, title }) => (

  <Row className={styles.sideBar}>
    <Col>
      <Row className={`justify-content-center ${styles.title}`}>
        <h1 className="font-weight-bold text-wrap">{title}</h1>
      </Row>
      <Row className={`align-items-center ${styles.menu}`}>
        <Col md='1' xs='1' className="text-center">
          <Icon path={mdiCalendarClock} size={1} />
        </Col>
        <Col className="font-weight-bold text-wrap">
          Some text
        </Col>
      </Row>
    </Col>
  </Row>

)

SideBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func
}

export default SideBar
