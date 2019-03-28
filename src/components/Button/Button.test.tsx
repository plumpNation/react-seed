import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

/**
 * We want to create UI unit tests that are of value to the end user, and
 * don't just test the React framework.
 *
 * So this test is of little use, and snapshots are also not so useful.
 */
describe('<Button>', () => {
  test('it matches the snapshot', () => {
    const component = create(<Button>Hello</Button>);
    const root = component.root;

    const button = root.findByType('button');

    expect(button.props.children).toBe('Hello');
  });
});
