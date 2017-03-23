import React from 'react';
import renderer from 'react-test-renderer';
import {NoteForm} from '../NoteForm';

/* NoteForm snapshot test */

const noteFormSampleProps = { currentNote: 'new note',
                              handleInputChange: function(){},
                              handleSubmit: function(){} }

test('NoteForm renders correctly', () => {
  const tree = renderer.create(
    <NoteForm {...noteFormSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
