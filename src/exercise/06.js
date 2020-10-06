// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const usernameInputRef = React.useRef(null);
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // onSubmitUsername(event.target.elements[0].value);
    // onSubmitUsername(event.target.elements.usernameInput.value);
    // onSubmitUsername(usernameInputRef.current.value); // useRef
    onSubmitUsername(username); // useState
  }

  function handleChange(event) {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} type="text" onChange={handleChange} value={username}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
