import React from 'react';
import {partial} from '../../lib/utils'

export const StaticNote = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  const handleToggleEdit = partial(props.handleToggleEdit, props.id)

  return (
    <li>
      <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
      <span onClick={handleToggleEdit}>{props.content}</span>
    </li>
  )
}

  StaticNote.propTypes = {
    content: React.PropTypes.string.isRequired,
    handleToggleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired
  }
