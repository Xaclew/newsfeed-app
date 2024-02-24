import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main app component
import './index.css';

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App className ="app" />);
