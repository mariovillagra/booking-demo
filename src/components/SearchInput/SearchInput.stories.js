import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchInput from './SearchInput'

const actions = {
  handleSubmit: action('Submit action')
}

storiesOf('SearchIput', module)
  .add('default', () => <SearchInput placeholder="Busqueda" {...actions} />)
