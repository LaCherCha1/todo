import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function ListItem(props) {
  return (
    <div>
      <ul className='list'>
        { props.items.map(item => (
          <li onClick={props.onListClick} key={ item.date }>
            <label>
              <input className='checkbox' type='checkbox' />
              <span className="checkmark"></span>
              { item.text }
            </label>
            <FontAwesomeIcon onClick={ () => props.onDeleteClick(item.date) } className='del' icon={ faTrashAlt } />
          </li>
        )) }
      </ul>
    </div>
  )
}
