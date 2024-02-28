import { useState } from 'react'
import Text from './components/Text'
import './App.css'

function App() {
  const [empezar, setEmpezar] = useState(false);

  const empezarComponente = () => {
    setEmpezar(true);
  };
  return (
    <>
    <div className="content">
        {!empezar && <p onClick={empezarComponente}>I<span className='heart'>🖤</span>U</p>}
        {empezar && <Text />}
      </div>
    </>
  )
}

export default App
