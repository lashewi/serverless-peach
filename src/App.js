import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Home from './components/Home'

function App() {
  return (
      <Home />
  );
}

// export default withAuthenticator(App);

export default App;