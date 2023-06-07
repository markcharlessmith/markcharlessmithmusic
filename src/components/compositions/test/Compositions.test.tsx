import React from 'react';
import { render } from '@testing-library/react';
import Compositions from '../Compositions';
import '@testing-library/jest-dom/extend-expect';

const compositions = [
  {
    title: 'Where Light Exists...',
    movements: [],
    instrumentation: 'Guitar',
    year: '2021',
  },
  {
    title: 'Three Pieces for Piano',
    movements: ['I. Arpeggiato', 'II. Album Leaf', 'III. Adventure Awaits!'],
    instrumentation: 'Piano',
    year: '2020',
  },
];

describe('Compositions Component', () => {
  test('renders the component with the correct content', () => {
    const { getByText } = render(<Compositions compositions={compositions} />);

    // Check if the compositions' titles, instrumentation, and years are rendered correctly
    expect(getByText('Where Light Exists...')).toBeInTheDocument();
    expect(getByText('Three Pieces for Piano')).toBeInTheDocument();
    expect(getByText('Guitar')).toBeInTheDocument();
    expect(getByText('Piano')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
    expect(getByText('2020')).toBeInTheDocument();

    // Check if the movements are rendered correctly for the second composition
    expect(getByText('I. Arpeggiato')).toBeInTheDocument();
    expect(getByText('II. Album Leaf')).toBeInTheDocument();
    expect(getByText('III. Adventure Awaits!')).toBeInTheDocument();
  });
});