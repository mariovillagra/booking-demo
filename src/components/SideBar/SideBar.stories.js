import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SideBar from './SideBar'

export const links = [
  { label: 'Agendamiento' },
  { label: 'Servicios' },
  { label: 'Operadores' },
  { label: 'Clientes' },
  { label: 'Pagos' }
]

export const actions = {
  handleItemClick: action('Click on item')
}

storiesOf('SideBar', module)
  .add('default', () => <SideBar links={links} {...actions} title="Booking Demo" />)
