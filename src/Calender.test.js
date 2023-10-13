import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './calender';  

test('renders a calendar for the specified date', () => {
  const date = new Date('2022, 4, 15');
  const { container, getByText } = render(<Calendar date={date} />);    
  expect(getByText('April 2022')).toBeInTheDocument();
});
