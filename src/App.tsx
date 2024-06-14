import { useState } from 'react';
import './App.css';

function App() {
  const [tempCarac, setTempCarac] = useState('');
  const [tempString, setTempString] = useState('');
  const [carac, setCarac] = useState('');
  const [string, setString] = useState('');
  const [count, setCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const countCharacterOccurrences = (str, char) => {
    return str.split('').reduce((count, currentChar) => {
      return currentChar === char ? count + 1 : count;
    }, 0);
  };

  const handleCount = () => {
    setCarac(tempCarac);
    setString(tempString);
    const result = countCharacterOccurrences(tempString, tempCarac);
    setCount(result);
    setShowResult(true); // Afficher le résultat après le clic
  };

  return (
    <>
      <div>
        Mettez votre mot
        <br />
        <input
          name="string"
          value={tempString}
          onChange={(e) => setTempString(e.target.value)}
        />
        <br />
        <br />
        Mettez le caractère à chercher <br />
        <input
          name="carac"
          value={tempCarac}
          onChange={(e) => setTempCarac(e.target.value)}
          maxLength={1}
        />
        <br />
      </div>
      <div className="card">
        <button onClick={handleCount}>
          Compter
        </button>
        {showResult && (
          <p>Le caractère "{carac}" apparaît {count} fois dans la chaîne "{string}"</p>
        )}
      </div>
    </>
  );
}

export default App;
