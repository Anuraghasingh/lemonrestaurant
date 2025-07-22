import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("shows confirmation message on valid form submission", () => {
  render(<BookingForm />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John" } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-08-01" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
  fireEvent.click(screen.getByText(/book table/i));
  expect(screen.getByText(/thank you/i)).toBeInTheDocument();
});
