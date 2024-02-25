import React from "react";
import "./App.css"; // Import CSS file for styling

function App() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="main-content">
        <h1>Welcome to Our Landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Learn More</button>
      </section>
    </div>
  );
}

export default App;
