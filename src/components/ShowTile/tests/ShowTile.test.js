import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ShowTile from '../ShowTile';

describe('Must have properties', () => {
  it('expects to render null when there are no props', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ShowTile />);

    const result = renderer.getRenderOutput();
    const expected = null;
    expect(result).toEqual(expected);
  });
});

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<ShowTile />, div);
  renderer.create(<ShowTile />);
});
