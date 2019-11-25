import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { mdiCalendarClock, mdiSettings, mdiContentCut, mdiClipboardAccount, mdiCashMultiple } from '@mdi/js'

import SideBar from './SideBar'

export const links = [
  { label: 'Agendamiento', icon: mdiCalendarClock },
  { label: 'Servicios', icon: mdiSettings },
  { label: 'Operadores', icon: mdiContentCut },
  { label: 'Clientes', icon: mdiClipboardAccount },
  { label: 'Pagos', icon: mdiCashMultiple }
]

export const actions = {
  handleItemClick: action('Click on item')
}

storiesOf('SideBar', module)
  .add('default', () => <SideBar links={links} {...actions} title="Booking Demo" />)
