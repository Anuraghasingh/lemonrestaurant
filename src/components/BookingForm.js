import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  return submitted ? (
    <div role="alert" aria-live="polite">
      <h2>Thank you!</h2>
      <p>Your booking has been submitted.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          required
        />
        {errors.name && <span role="alert">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          aria-invalid={!!errors.date}
          required
        />
        {errors.date && <span role="alert">{errors.date}</span>}
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          aria-invalid={!!errors.time}
          required
        />
        {errors.time && <span role="alert">{errors.time}</span>}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        {errors.guests && <span role="alert">{errors.guests}</span>}
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
