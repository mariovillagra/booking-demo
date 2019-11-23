import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SideBarLink from './SideBarLink'

export const link = {
  label: 'Agendamiento'
}

export const actions = {
  handleClick: action('click on')
}

storiesOf('SideBarLink', module)
  .add('default', () => <SideBarLink label={link.label} {...actions}/>)
