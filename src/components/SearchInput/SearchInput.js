import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

const SearchInput = ({ handleSubmit, placeholder }) => (
  <Form onSubmit={(e) => {
    e.preventDefault()
    handleSubmit()
  }}
  style={{ margin: '10px' }}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupPrepend"><Icon path={mdiMagnify} size={1} /></InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        placeholder={placeholder}
        aria-describedby="inputGroupPrepend"
      />
    </InputGroup>
  </Form>
)

SearchInput.propTypes = {
  handleSubmit: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput
