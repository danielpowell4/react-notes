import React from 'react'

export const NoteForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      onChange={props.handleInputChange}
      value={props.currentNote}/>
  </form>)

  NoteForm.propTypes = {
    currentNote: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  }
