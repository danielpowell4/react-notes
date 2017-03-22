import React from 'react';
import {NoteItem} from './NoteItem'

export const NoteIndex = (props) => {
  const noteItems = (props) => {

    return ( props.notes.map(note => <NoteItem key={note.id}
                                               {...note}
                                               handleToggleEdit={props.handleToggleEdit}
                                               handleRemove={props.handleRemove}
                                               handleUpdateContent={props.handleUpdateContent}
                                               handleEditSubmit={props.handleEditSubmit}/> ) )
  }

  return (
    <div className="Note-Index">
      <ul>
        {noteItems(props)}
      </ul>
    </div>
  )
}

  NoteIndex.propTypes = {
    handleEditSubmit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    handleToggleEdit: React.PropTypes.func.isRequired,
    handleUpdateContent: React.PropTypes.func.isRequired,
    notes: React.PropTypes.array.isRequired
  }
