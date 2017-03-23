import React from 'react';
import renderer from 'react-test-renderer';
import {NoteItem} from '../NoteItem';

/* NoteItem snapshot tests */

const staticNoteItemSampleProps = { content: 'static note toBe',
                                    handleRemove: function(){},
                                    handleToggleEdit: function(){},
                                    id: 2,
                                    isEditting: false }

test('NoteItem renders a StaticNote correctly', () => {
  const tree = renderer.create(
    <NoteItem {...staticNoteItemSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const edittingNoteItemSampleProps = { content: 'edit note toBe',
  handleUpdateContent: function(){},
  handleEditSubmit: function(){},
  id: 3,
  isEditting: true,
}

test('NoteItem renders an EditNote correctly', () => {
  const tree = renderer.create(
    <NoteItem {...edittingNoteItemSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
