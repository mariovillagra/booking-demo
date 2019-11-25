import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MainBar from './MainBar'

const actions = {
  handleAccountClick: action('account click')
}

storiesOf('MainBar', module)
  .add('default', () => <MainBar pageTitle='Page Title' {...actions} />)
