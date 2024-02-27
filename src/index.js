import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main app component
import './styles/index.css';

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App className ="app" />);
