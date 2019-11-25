import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LoginForm from './LoginForm'

const actions = {
  handleSubmit: action('Submit')
}

storiesOf('LoginForm', module)
  .add('default', () => <LoginForm title="Booking Demo" {...actions} />)
