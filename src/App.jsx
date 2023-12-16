import { useEffect } from 'react';

import './App.css';

const appName = import.meta.env.VITE_APP_NAME;

function App() {
  useEffect(() => {
    document.title = appName;
  }, []);

  return (
    <main className="container">
      <header>
        <h1>{appName}</h1>
      </header>
    </main>
  );
}

export default App;
