const root = ReactDOM.createRoot(document.getElementById('root'));

// Use React.createElement instead of JSX
root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement('h2', null, 'Welcome to React!'),
    React.createElement('p', null, 'This is rendered by a React component without JSX.')
  )
);
