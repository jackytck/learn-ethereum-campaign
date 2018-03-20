import { Link } from '../routes'
import { Menu } from 'semantic-ui-react'
import React from 'react'

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link prefetch route='/'>
        <a className='item'>CrowdCoin</a>
      </Link>

      <Menu.Menu position='right'>
        <Link prefetch route='/'>
          <a className='item'>Campaigns</a>
        </Link>

        <Link prefetch route='/campaigns/new'>
          <a className='item'>+</a>
        </Link>

      </Menu.Menu>
    </Menu>
  )
}
