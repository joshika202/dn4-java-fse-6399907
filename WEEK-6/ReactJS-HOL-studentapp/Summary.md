1. Explain React Components
React components are building blocks of a React application UI. Each component returns a part of the UI (via JSX) and can have its own logic and state.

2. Differences Between React Components and JavaScript Functions
Feature	React Components	JavaScript Functions
Purpose	UI rendering	General logic execution
Return	JSX (UI)	Any data (number, string, etc.)
Integration	Used with JSX in React apps	Not meant for UI directly
Reusability	Reusable UI blocks	General-purpose code reuse

3. Types of Components in React
Class Components – Use ES6 classes, can use lifecycle methods, support state.

Function Components – Use functions and hooks, simpler and modern way to write components.

4. Explain Class Component
A class component is a JavaScript ES6 class that extends React.Component. It must have a render() method that returns JSX.

Example:

jsx
Copy
Edit
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}
5. Explain Function Component
Function components are JavaScript functions that return JSX. Modern React encourages using them with hooks.

Example:

jsx
Copy
Edit
import React from 'react';

function Welcome() {
  return <h1>Hello from Function Component!</h1>;
}
6. Define Component Constructor
In class components, the constructor() is used to:

Initialize state

Bind methods

Example:

jsx
Copy
Edit
constructor(props) {
  super(props);
  this.state = { name: 'Student' };
}
7. Define render() Function
The render() function is required in every class component and returns the JSX to be displayed in the UI.