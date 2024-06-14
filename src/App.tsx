import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [carac, setCarac] = useState('');
  const [string, setString] = useState('');
  const countCharacterOccurrences = (str, char) => {
    return str.split('').reduce((count, currentChar) => {
      return currentChar === char ? count + 1 : count;
    }, 0);
  };
  const count = countCharacterOccurrences(string, carac);
  return (
    <>
      <div>
        Mettez votre mot
        <br />
        <input
          name="carac"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <br />
        <br />
        Mettez le caractère à chercher <br />
        <input
          name="carac"
          value={carac}
          onChange={(e) => setCarac(e.target.value)}
          maxLength={1}
        />
        <br />
      </div>
      <div className="card">
        <button onClick={countCharacterOccurrences}>
          Le caractère "{carac}" apparaît {count} fois dans la chaîne "{string}"
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
