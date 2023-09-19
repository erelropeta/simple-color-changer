import Square from './components/Square';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');

  const handleChangeInput = (colorInput) => {
    setColorValue(colorInput);
  };

  return (
    <main className="main">
      <h1 className="main__title">Simple Color Changer</h1>
      <Square colorValue={colorValue} />
      <Input handleChangeInput={handleChangeInput} />
    </main>
  );
}

export default App;
