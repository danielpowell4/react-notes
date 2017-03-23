import React from 'react';
import renderer from 'react-test-renderer';
import {NoteIndex} from '../NoteIndex';

/* NoteIndex snapshot tests */

const noteIndexSampleProps = {
  handleEditSubmit: function(){},
  handleRemove: function(){},
  handleToggleEdit: function(){},
  handleUpdateContent: function(){},
  notes: [{id: 1, isEditting: false, content: 'static note toBe'}, {id:2, isEditting: true, content: 'editting note toBe'}]
}

test('NoteIndex renders both style of notes correctly', () => {
  const tree = renderer.create(
    <NoteIndex {...noteIndexSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
