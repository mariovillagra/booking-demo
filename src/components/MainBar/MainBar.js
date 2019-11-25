import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '@mdi/react'
import { mdiAccountCircle } from '@mdi/js'

import styles from './MainBar.module.css'

const MainBar = ({ pageTitle, handleAccountClick }) => (
  <Row className={`rounded ${styles.mainBar}`}>
    <Col md="6"><div className={`font-weight-bold ${styles.title}`}>{pageTitle}</div></Col>
    <Col md="4" className="text-right">
      {/* <Icon path={mdiBell} color="#061750" size={1} /> */}
    </Col>
    <Col className="text-right" md="2" onClick={handleAccountClick}>
      <span>Admin</span>
      <Icon path={mdiAccountCircle} color="#061750" size={1} />
    </Col>
  </Row>
)

MainBar.propTypes = {
  pageTitle: PropTypes.string,
  handleAccountClick: PropTypes.func
}

export default MainBar
