import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Components/Booking/BookingForm';
import { MemoryRouter } from 'react-router-dom';

test('Renders Form heading', () => {
  render(<MemoryRouter><Form /></MemoryRouter>);
  
  const headingElem = screen.getByText("Reservation");
  expect(headingElem).toBeInTheDocument();

  const btn = screen.getByRole("button")
  fireEvent.click(btn)


});
