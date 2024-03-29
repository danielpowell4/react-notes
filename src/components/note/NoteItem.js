import React from 'react';
import {StaticNote} from './StaticNote'
import {EditNote} from './EditNote'

export const NoteItem = (props) => {
  if (props.isEditting) {
    return ( <EditNote id={props.id}
                       content={props.content}
                       handleUpdateContent={props.handleUpdateContent}
                       handleEditSubmit={props.handleEditSubmit}/> )
  }
  return ( <StaticNote id={props.id}
                       content={props.content}
                       handleToggleEdit={props.handleToggleEdit}
                       handleRemove={props.handleRemove}/> )
}

  NoteItem.propTypes = {
    content: React.PropTypes.string.isRequired,
    handleEditSubmit: React.PropTypes.func,
    handleRemove: React.PropTypes.func,
    handleToggleEdit: React.PropTypes.func,
    handleUpdateContent: React.PropTypes.func,
    id: React.PropTypes.number.isRequired,
    isEditting: React.PropTypes.bool.isRequired
  }
