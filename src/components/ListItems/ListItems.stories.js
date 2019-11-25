import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CustomerList from './CustomerList'
import ProductList from './ProductList'

const actions = {
  handleClick: action('Click on')
}

const customers = [
  { name: 'Pedro', document: '123321', birthday: '21/11/54' },
  { name: 'Ana', document: '556661', birthday: '21/11/54' }
]

const products = [
  { name: 'coca cola', type: 'consumible', value: 10000 }
]

storiesOf('ItemsList', module)
  .add('CustomerList', () => <CustomerList customerList={customers} {...actions} />)
  .add('ProductList', () => <ProductList productList={products} />)
