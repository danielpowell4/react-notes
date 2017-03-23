import React, { Component } from 'react';
import logo from './logo.svg';
import './NoteApp.css';
import {NoteForm, NoteIndex} from './components/note'
import {addNote, findById, generateId, toggleEditStatus, updateContent, updateNote, removeNote} from './lib/noteHelpers'
import {pipe, partial} from './lib/utils'
import {loadNotes, createNote, saveNote, destroyNote} from './lib/noteService'

class NoteApp extends Component {
  /* set up actions */
  state = {
    notes: [],
    currentNote: '',
    lastSaved: Date.now()
  }

  componentDidMount() {
    loadNotes()
      .then(notes => this.setState({notes}))
  }

  /* new note form actions */
  handleInputChange = (evt) => {
    this.setState({
      currentNote: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newNote = {id: newId, content: this.state.currentNote, isEditting: false}
    const updatedNotes = addNote(this.state.notes, newNote)
    this.setState({
      notes: updatedNotes,
      currentNote: '',
      errorMessage: ''
    })
    createNote(newNote)
      .then(() => this.showTempMessage('Note added!'))
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply note text'
    })
  }

  /* edit form actions */
  handleToggleEdit = (id) => {
    const getEdittedNote = pipe(findById, toggleEditStatus)
    const updated = getEdittedNote(id, this.state.notes)
    const getUpdatedNotes = partial(updateNote, this.state.notes)
    const updatedNotes = getUpdatedNotes(updated)
    this.setState({notes: updatedNotes})
    saveNote(updated)
  }

  handleUpdateContent = (id, evt) => {
    const newContent = evt.target.value
    const populatedUpdateContent = partial(updateContent, newContent)
    const getUpdatedNote = pipe(findById, populatedUpdateContent)
    const updated = getUpdatedNote(id, this.state.notes)
    const getUpdatedNotes = partial(updateNote, this.state.notes)
    const updatedNotes = getUpdatedNotes(updated)
    this.setState({notes: updatedNotes})
    if (this.state.lastSaved + 10000 < Date.now()) {
      return saveNote(updated)
        .then(() => this.showTempMessage('Note Saved'))
        .then(() => this.setState({lastSaved: Date.now()}))
    }
  }

  handleEditSubmit = (id, evt) => {
    evt.preventDefault()
    this.handleUpdateContent(id, evt)
    this.handleToggleEdit(id)
  }

  /* remove note action */
  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedNotes = removeNote(this.state.notes, id)
    this.setState({notes: updatedNotes})
    destroyNote(id)
      .then(() => this.showTempMessage('Note Removed'))
  }

  /* multipurpose actions */
  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }


  render() {
    const submitHandler = this.state.currentNote ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Dan's Notes</h2>
        </div>
        <div className="Note-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          {this.state.message && <span className='success'>{this.state.message}</span>}
          <NoteForm handleInputChange={this.handleInputChange}
            currentNote={this.state.currentNote}
            handleSubmit={submitHandler}/>
          <NoteIndex handleToggleEdit={this.handleToggleEdit}
            handleUpdateContent={this.handleUpdateContent}
            handleEditSubmit={this.handleEditSubmit}
            notes={this.state.notes}
            handleRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
