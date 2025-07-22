import React from "react";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
        <p>Book your table below</p>
      </header>
      <main>
        <BookingForm />
      </main>
      <footer>
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
