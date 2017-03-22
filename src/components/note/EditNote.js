import React from 'react';
import {partial} from '../../lib/utils';

export const EditNote = (props) => {
  const handleUpdateContent = partial(props.handleUpdateContent, props.id)
  const handleEditSubmit = partial(props.handleEditSubmit, props.id)
  const content = props.content

  return (<form onSubmit={handleEditSubmit}>
    <input type="text"
      onChange={handleUpdateContent}
      value={content}/>
  </form>)
}

  EditNote.propTypes = {
    content: React.PropTypes.string.isRequired,
    handleEditSubmit: React.PropTypes.func.isRequired,
    handleUpdateContent: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired
  }
