import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Counter from '../src/components/Counter';

describe('Counter component', () => {
  it('should render the initial count', () => {
    const {getByText} = render(<Counter text="Test" />);
    expect(getByText('You clicked the button 0 times')).toBeDefined();
  });

  it('should increment the count when the button is clicked', () => {
    const {getByText} = render(<Counter text="Test" />);
    const button = getByText('Click me!');

    fireEvent.press(button);
    expect(getByText('You clicked the button 1 times')).toBeDefined();

    fireEvent.press(button);
    expect(getByText('You clicked the button 2 times')).toBeDefined();
  });
});
