// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <header className="App-header">
        <h1>Theme Toggle  Feature</h1>
        <h4>Click the button to change the theme</h4>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
