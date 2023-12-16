import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME;
  }, []);
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
