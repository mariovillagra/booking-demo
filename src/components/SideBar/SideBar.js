import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '@mdi/react'

import styles from './SideBar.module.css'

const SideBar = ({ links, handleItemClick, title }) => (
  <Row className={styles.sideBar}>
    <Col>
      <Row className={`justify-content-center ${styles.title}`}>
        <h2 className="font-weight-bold text-wrap">{title}</h2>
      </Row>
      <Row className={styles.menu}>
        <Col>
          {links &&
            links.map((link, index) => (
              <Row
                key={index}
                className={`align-items-center ${styles.menuItems}`}
                onClick={handleItemClick}
              >
                <Col md="1" xs="1" className="text-center">
                  <Icon path={link.icon} size={1} color="aliceblue" />
                </Col>
                <Col className="font-weight-bold text-wrap">{link.label}</Col>
              </Row>
            ))}
        </Col>
      </Row>
    </Col>
  </Row>
)

SideBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  handleItemClick: PropTypes.func
}

export default SideBar
