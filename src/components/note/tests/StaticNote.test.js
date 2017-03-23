import React from 'react';
import renderer from 'react-test-renderer';
import {StaticNote} from '../StaticNote';

/* StaticNote snapshot test */

const staticNoteSampleProps = { content: 'static note',
                                handleToggleEdit: function(){},
                                handleRemove: function(){},
                                id: 1 }

test('StaticNote renders correctly', () => {
  const tree = renderer.create(
    <StaticNote {...staticNoteSampleProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
