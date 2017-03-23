import React from 'react';
import renderer from 'react-test-renderer';
import {EditNote} from '../EditNote';

/* EditNote snapshot test */

const editNoteSampleProps = { content: 'editted content',
                      handleEditSubmit: function(){},
                      handleUpdateContent: function(){},
                      id: 1 }

test('EditNote renders correctly', () => {
  const tree = renderer.create(
    <EditNote {...editNoteSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
