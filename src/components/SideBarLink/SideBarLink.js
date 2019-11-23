import React from 'react'
import PropTypes from 'prop-types'

const SideBarLink = ({ label, handleClick }) => (
  <div onClick={handleClick}>{label}</div>
)

SideBarLink.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
}

export default SideBarLink
