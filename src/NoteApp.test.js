import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './NoteApp';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoteApp />, div);
});

test('NoteApp renders correctly', () => {
  const tree = renderer.create(
    <NoteApp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
