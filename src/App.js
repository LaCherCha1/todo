import React from 'react';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom';
export default class App extends React.Component {
  

  render(){
    return (
      <div className="container">
        <div className='header'>
          <h1>My Todo list</h1>
          <input 
          className='text-input' 
          type='text' 
          placeholder='New Todo'
           />
          <button className='btn'>Save</button>
        </div>
        <div className='body'>
          <ul className='list'>
            <li>
              <label>
                <input className='checkbox' type='checkbox' />
                <span className="checkmark"></span>
                todo
              </label>
              <FontAwesomeIcon className='del' icon={ faTrashAlt } />
            </li>
            <li>
              <label>
                <input className='checkbox' type='checkbox' />
                <span className="checkmark"></span>
                todo 2
              </label>
              <FontAwesomeIcon className='del' icon={ faTrashAlt } />
            </li>
          </ul>
        </div>
      </div>
    );
  }

}


