import React, { Component } from 'react'

export default class NewItemForm extends Component {
  render() {
    return (
      <form action='/task/create' method='post'>
        <label for='title'>Title:</label>
        <input type='text' name='title' />
        <label for='description'>Description:</label>
        <textarea rows='2' name='description' />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
