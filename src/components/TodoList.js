import React from 'react';
import ListItem from './ListItem';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      newInput: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleInput(e) {
    console.log(e.target.value)
    this.setState({
      newInput: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this._newInput.value.length > 0) {
      const newItem = {
        text: this._newInput.value,
        date: Date.now()
      }
      this.setState({
        items: this.state.items.concat(newItem),
        newInput: ''
      });
      this._newInput.value = '';
      this._newInput.focus();
    } else {
      alert('You should write something first!')
      this._newInput.focus();
    }

  }

  handleDelete(key) {
    const data = this.state.items.filter(item => {
      return (item.date !== key)
    });

    this.setState({
      items: data
    })

  }
  handleListClick(e) {     
    if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
      const checkbox = e.target.childNodes[0].childNodes[0]
      checkbox.checked = !checkbox.checked
    }
  }

  render() {
    return (
      <div className="container">
        <div className='header'>
          <h1>My Todo list</h1>
          <form onSubmit={ this.handleSubmit }>
            <input
              className='text-input'
              type='text'
              placeholder='New Todo'
              onChange={ this.handleInput }
              ref={ (a) => this._newInput = a } />
            <button type='submit' className='btn'>Save</button>
          </form>
        </div>
        <div className='body'>
          <ListItem
            onListClick={ this.handleListClick }
            onDeleteClick={ this.handleDelete }
            items={ this.state.items } />
        </div>
      </div>
    );
  }

}


